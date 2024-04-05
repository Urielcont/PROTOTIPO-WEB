const { Flujo } = require("../model/flujo.model");



exports.MostrarUltimoFlujo = async (req, res) => {
    try {
        const ultimoFlujo = await Flujo.findOne().sort({ $natural: -1 }).select('mlSalidos').limit(1); // Busca el último documento y selecciona solo el campo 'nivel_ph'
        if (!ultimoFlujo) {
            return res.status(404).json({ message: "No se encontraron datos del Flujo" });
        }
        res.json(ultimoFlujo.mlSalidos); // Devuelve solo el valor de 'ml Salidos' del último documento
    } catch (error) {
        console.error("Error al obtener el último valor del Flujo:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};


exports.MostrarFlujo = async (req, res) => {
    try {
        const mostrarFlujo = await Flujo.find();
        if (mostrarFlujo.length === 0) {
            return res.status(404).json({ message: "No se encontraron datos de pH" });
        }
        res.json(mostrarFlujo); // Devuelve los últimos registros de pH
    } catch (error) {
        console.error("Error al obtener los últimos valores de pH:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};
