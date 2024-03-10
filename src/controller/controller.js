const {User} = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Registrar un nuevo usuario
exports.registrar= async (req,res)=>{
   
        const { nombres, telefono, correo, password} = req.body;
        try {
            

        const userFound = await User.findOne({correo});
        if (userFound){
            return res.status(400).json(["la cuenta ya esta en uso"]);
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

        jwt.sign({
            id:usuario._id,
        }
        ,
        "encriptado123",
        {
            expiresIn:"1d",
        },
        (error, token) => {
            if (error) {
              console.log(error);
              res.status(500).json({ message: 'Error interno del servidor' });
            } else {
              res.cookie('token',token);
              res.json({
                message:"usuario creado correctamente",
              })
            }
          }      
        )
    } catch (error) {
     console.log(error)       
    }

}
const login=(req,res)=>{

};

exports.Mostrarusuario= async(req,res)=>{
    const users= await User.find()
    res.json(users)
}