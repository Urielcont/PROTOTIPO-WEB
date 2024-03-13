import axios from 'axios';

const API='http://localhost:4000/api'
export const RegistrarUsuario = (user) => axios.post(`${API}/registrar`,user)
export const login = (user) => axios.post(`${API}/login`, user)
