
import axios from './axios';

export const RegistrarUsuario = (user) => axios.post(`/registrar`, user);
export const login = (user) => axios.post(`/login`, user);
export const verifyTokenRequest = () => axios.get(`/verify`);

export const getUserRequest = () => axios.get(`/usuarios`);
export const searchUserRequest=(id)=>axios.get(`/users/${id}`);
export const updateUserRequest=(user)=>axios.put(`/users/${user._id}`,user);
export const deleteUserRequest=(id)=>axios.delete(`/users/${id}`);
