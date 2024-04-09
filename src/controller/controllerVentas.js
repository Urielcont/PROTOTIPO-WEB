const { Ventas } = require('../model/ventas');

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
            fechaCerrar: new Date(),
            fechaApertura: new Date(),
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

exports.SumarTotalVentas = async (req, res) => {
    try {
        const resultado = await Ventas.aggregate([
            {
                $group: {
                    _id: null,
                    total_ventas: { $sum: "$total" }
                }
            }
        ]);
        if (resultado.length === 0) {
            return res.status(404).json({ message: "No se encontraron ventas" });
        }
        res.json({ total_ventas: resultado[0].total_ventas });
    } catch (error) {
        console.error("Error al sumar el total de las ventas:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};


exports.TotalVentasPorFecha = async (req, res) => {
    try {
        const { año, mes, dia } = req.params; // Obtenemos el año, mes y día de los parámetros de la solicitud

        const inicioDia = new Date(año, mes - 1, dia);
        const finDia = new Date(año, mes - 1, dia, 23, 59, 59);

        // Buscamos las ventas que ocurrieron en el día específico
        const ventasPorDia = await Ventas.find({
            fechaCerrar: { $gte: inicioDia, $lte: finDia } // Filtramos por las ventas del día específico
        });

        // Calculamos el total de las ventas del día
        const totalVentasPorDia = ventasPorDia.reduce((total, venta) => total + venta.total, 0);

        res.json({
            ventas: ventasPorDia,
            total_ventas: totalVentasPorDia
        });
    } catch (error) {
        console.error("Error al obtener las ventas por fecha:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};
