const {User} = require("../model/user.model");
const bcrypt = require("bcryptjs");
const { CreateAccessToken } = require("../libs/jwt");
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
        const token = await CreateAccessToken({id:usuario._id});
        res.cookie('token',token);
        res.json({
          message:"usuario creado correctamente",
        })
    } catch (error) {
      res.status(500).json({message:error.message})      
    }

}
const login=(req,res)=>{

};

exports.Mostrarusuario= async(req,res)=>{
    const users= await User.find()
    res.json(users)
}