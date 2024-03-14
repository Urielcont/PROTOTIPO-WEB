const {User} = require("../model/user.model");
const bcrypt = require("bcrypt");

const { CreateAccessToken } = require("../libs/jwt");
// Registrar un nuevo usuario
exports.registrar= async (req,res)=>{
   
        const { nombres, apellidoPaterno, apellidoMaterno, telefono, correo, password} = req.body;
        try {
        const userFound = await User.findOne({correo});
        if (userFound) return res.status(400).json(["la cuenta ya esta en uso"])

        const passwordHash= await bcrypt.hash(password,10);
            // Crear el usuario 
        const user = new User({
            nombres,
            apellidoPaterno,
            apellidoMaterno,  
            telefono,
            correo,
            password:passwordHash,
        });
        await user.save();
        const token = await CreateAccessToken({id:user._id});
        res.cookie('token',token);
        res.json({
          message:"usuario creado correctamente",
        })
    } catch (error) {
      res.status(500).json({message:error.message})      
    }

}

exports.login = async (req, res) => {
  const { correo, password } = req.body;
  try {
    // Encuentra la información del usuario por su correo
    const userFound = await User.findOne({ correo });

    if (!userFound) return res.status(400).json({ message: "El usuario no se encontró" });

    // Compara las contraseñas
    const passwordMatch = await bcrypt.compare(password, userFound.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = await CreateAccessToken({ id: userFound._id });
    res.cookie('token', token);
    res.json({
      message: "Usuario logeado correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.logout= async(req,res)=>{
  res.cookie("token", "",{
    expires: new Date(0),
  });
  return res.sendStatus(200);
}

exports.perfil=async(req,res)=>{
  const userFound = await User.findById(req.user.id)

  if(!userFound) return res.status(400).json({message:"Usuario no encontrado"});

  return res.json({
    id:userFound._id,
    nombres:userFound.nombres,
    apellidoPaterno:userFound.apellidoPaterno,
    apellidoMaterno:userFound.apellidoMaterno,
    telefono:userFound.telefono,
    correo:userFound.correo,
  })
}