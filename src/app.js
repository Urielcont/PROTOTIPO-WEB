// importar conexion de la base de datos
const connectDB = require("./config/ConfigDb.js");
// requerir paquetes de express
const express = require("express");
const rutas = require("./routes/rutas.js")
 

// Comenzar app express
const app = express();

// connectDB();
connectDB();

// middleware
app.use(express.json());
app.use('/api', rutas);
// Asignar puerto 3000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` conectado en el puerto ${PORT}`);
});
// Comporbar Conexion
console.log('Servidor Up');

