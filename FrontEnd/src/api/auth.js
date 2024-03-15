
import axios from './axios';

export const RegistrarUsuario = (user) => axios.post(`/registrar`,user)
export const login = (user) => axios.post(`/login`, user)
export const verifyTokenRequest=() => axios.get(`/verify`)



