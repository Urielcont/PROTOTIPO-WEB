const {User} = require("../model/user.model");
const bcrypt = require("bcrypt");

const { CreateAccessToken } = require("../libs/jwt");
// Registrar un nuevo usuario
exports.registrar= async (req,res)=>{
   
        const { nombres, telefono, correo, password} = req.body;
        try {
        const userFound = await User.findOne({correo});
        if (userFound){
            return res.status(400).json(["la cuenta ya esta en uso"]);
        }
        if (telefono){
          return res.status(400).json(["El telefono ya esta en uso"]);
      }
        const passwordHash= await bcrypt.hash(password,10);
            // Crear el usuario 
        const usuario = new User({
            nombres,  
            telefono,
            correo,
            password:passwordHash,
        });
        await usuario.save();
        const token = await CreateAccessToken({id:usuario._id});
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
      return res.status(400).json({ message: 'Credenciales incorrectas' });
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