const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema= new mongoose.Schema({
    nombres:{
        type:String,

    },
    telefono:{
        type:String,
    },
    correo:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},
     

);

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
});
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
const User = mongoose.model('User',userSchema);


module.exports={User};

