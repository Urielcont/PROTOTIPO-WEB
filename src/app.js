const connectDB = require("./config/ConfigDb.js");
const express = require("express");
const cookieParser=require("cookie-parser");
const cors = require("cors");
const rutas = require("./routes/rutas.js");
const app = express();
require("dotenv").config();

// connectDB();
connectDB();

// middleware
app.use(cors({
  origin:process.env.FRONT,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', rutas);
// Asignar puerto 3000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` conectado en el puerto ${PORT}`);
});
// Comporbar Conexion
console.log('Servidor Up');

