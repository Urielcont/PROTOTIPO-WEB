import { createContext, useState, useEffect } from "react";
// import { RegistrarUsuario, login, verifyTokenRequest, getUserRequest } from "../api/auth";
import axios from 'axios';
// import { Client } from "paho-mqtt";

import PropTypes from 'prop-types';

// var api="http://localhost:4000/api"
export const SensoresContext = createContext();


export const SensorProvider = ({ children }) => {

  const [historialFlujo, setHistorialFlujo] = useState([]);
  const [historialPh, setHistorialPh] = useState([]);
  const [nivelPh, setnivelPh] = useState([]); //Ultimo valor de ph en la base de datos
  const [nivelFlujo, setnivelFlujo] = useState([]);//Ultimo valor de Flujo en la base de datos
  const [nivelTurbidez, setnivelTurbidez] = useState([]);//Ultimo valor de Turbidez en la base de datos


  // variable usada para conectar a la api
  const api = "http://localhost:4000/api"
  // -------OBTENER ULTIMO DATO DE LA BASE DE DATOS DE SENSORES----
  //   try {
  //     useEffect(() => {
  //         // Función para obtener los últimos datos de cada sección





  //         const interval = setInterval(obtenerUltimoDato, 1000);


  //         return () => clearInterval(interval);
  //     }, []);
  // } catch (error) {
  //     console.log("Error al llamar los datos", error)
  // }
  useEffect(() => {
    MostrarFlujo();
    obtenerUltimoDato();
    MostrarPh();
  }, []);
  const obtenerUltimoDato = async () => {
    try {
      // Hacer solicitudes HTTP para obtener los datos más recientes
      const responsePh = await axios.get(`${api}/ph`);
      const responseFlujo = await axios.get(`${api}/flujo`);
      const responseTurbidez = await axios.get(`${api}/turbidez`);

      // Formatear la fecha de los datos
      const datosPh = {
        ...responsePh.data,
        fecha: new Date(responsePh.data.fecha).toLocaleString()
      };
      const datosFlujo = {
        ...responseFlujo.data,
        fecha: new Date(responseFlujo.data.fecha).toLocaleString()
      };
      const datosTurbidez = {
        ...responseTurbidez.data,
        fecha: new Date(responseTurbidez.data.fecha).toLocaleString()
      };
      setnivelPh(datosPh);
      setnivelFlujo(datosFlujo);
      setnivelTurbidez(datosTurbidez);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Obtener todos los datos de la base de datos
  const MostrarFlujo = async () => {
    try {
      const response = await axios.get(`${api}/mostrarFlujo`);
      setHistorialFlujo(response.data.map(item => ({ ...item, fecha: new Date(item.fecha).toLocaleString() }))); // Formatear la fecha
    } catch (error) {
      console.error("Error Mostrar Flujo:", error);
    }
  };
  const MostrarPh = async () => {
    try {
      const response = await axios.get(`${api}/MostrarPh`);
      setHistorialPh(response.data.map(item => ({ ...item, fecha: new Date(item.fecha).toLocaleString() }))); // Formatear la fecha
    } catch (error) {
      console.error("Error Mostrar Ph:", error);
    }
  };


  return (
    <SensoresContext.Provider value={{
      historialFlujo,
      historialPh,
      nivelPh,
      nivelFlujo,
      nivelTurbidez,

    }}>
      {children}
    </SensoresContext.Provider>
  );
}

SensorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
