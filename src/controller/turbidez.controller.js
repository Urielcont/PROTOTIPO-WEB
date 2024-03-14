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
        res.status(201).json({ message: 'Turbidez subida correctamente', turbidez });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}


exports.MostrarTurbidez= async(req,res)=>{
    const encontrarTurbidez= await Turbidez.find()
    res.json(encontrarTurbidez)
}


exports.MostrarUltimaTurbidez = async (req, res) => {
    try {
        const ultimaTurbidez = await Turbidez.findOne().sort({ $natural: -1 }).select('nivel_turbidez').limit(1); // Busca el último documento y selecciona solo el campo 'nivel_ph'
        if (!ultimaTurbidez) {
            return res.status(404).json({ message: "No se encontraron datos de la Turbidez" });
        }
        res.json(ultimaTurbidez.nivel_turbidez); // Devuelve solo el valor de 'nivel_turbidez' del último documento
    } catch (error) {
        console.error("Error al obtener el último valor de la Turbidez:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};