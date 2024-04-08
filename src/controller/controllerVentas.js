const {Ventas} = require('../model/ventas');

exports.agregarVenta = async (req, res) => {
    try {
        const { nombre, totalGalones, total } = req.body;
        if (!nombre || !totalGalones || !total) {
            return res.status(400).json({ message: 'Faltan parámetros en la solicitud' });
        }

        const venta = new Ventas({
            nombre,
            totalGalones,
            total,
            // fechaCerrar: new Date(),
            // fechaApertura: new Date(),
        });

        await venta.save();
        res.status(201).json({ message: 'Venta guardada correctamente', venta });
    } catch (error) {
        console.error('Error al guardar los datos de la venta:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

exports.MostrarUltimaVenta = async (req, res) => {
    try {
        const ultimaVenta = await Ventas.findOne().sort({ $natural: -1 }).limit(1); // Busca el último documento y selecciona solo el campo 'nivel_ph'
        if (!ultimaVenta) {
            return res.status(404).json({ message: "No se encontraron datos de la Ultima Venta" });
        }
        res.json(ultimaVenta); 
    } catch (error) {
        console.error("Error al obtener la ultima Venta:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

exports.MostrarVentas = async (req, res) => {
    try {
        const ventas = await Ventas.find(); // Busca el último documento y selecciona solo el campo 'nivel_ph'
        if (!ventas) {
            return res.status(404).json({ message: "No se encontraron datos de las Ventas" });
        }
        res.json(ventas); 
    } catch (error) {
        console.error("Error al obtener las Ventas:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};
