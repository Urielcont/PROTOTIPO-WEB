const {PH} = require("../model/ph.model")
// Registrar un nuevo usuario
exports.subirTurbidez= async (req,res)=>{
    try {
        const { fecha, nivel_turbidez,status} = req.body;

        const ph = new PH({
            fecha,
            nivel_ph,
            status
        });
        console.log(ph);
        await ph.save();
        res.status(201).json({ message: 'usuario creado correctamente', ph });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}


exports.MostrarTurbidez= async(req,res)=>{
    const encontrarPh= await PH.find()
    res.json(encontrarPh)
}