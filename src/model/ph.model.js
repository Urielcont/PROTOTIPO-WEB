const mongoose = require("mongoose");


const phSchema= new mongoose.Schema({
    fecha:{
        type:Date,
    },
    nivel_ph:{
        type:String,
        require:true,
    },
    status:{
        type:Boolean,
    }
},
);

const PH = mongoose.model('PH',phSchema);


module.exports={PH};

