const mongoose = require("mongoose");


const phSchema= new mongoose.Schema({
    nivel_ph:{
        type:String,
        require:true,
    },
    
},
);

const PH = mongoose.model('PH',phSchema);


module.exports={PH};

