const {Turbidez} = require("../model/turbidez.model")
// Registrar un nuevo usuario
exports.subirTurbidez= async (req,res)=>{
    try {
        const { fecha, nivel_turbidez,status} = req.body;

        const turbidez = new Turbidez({
            fecha,
            nivel_turbidez,
            status
        });
        console.log(turbidez);
        await turbidez.save();
        res.status(201).json({ message: 'usuario creado correctamente', turbidez });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}


exports.MostrarTurbidez= async(req,res)=>{
    const encontrarTurbidez= await Turbidez.find()
    res.json(encontrarTurbidez)
}