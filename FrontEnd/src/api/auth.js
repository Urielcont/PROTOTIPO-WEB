
import axios from './axios';

const API='http://localhost:4000/api';

export const RegistrarUsuario = (user) => axios.post(`/registrar`, user);
export const login = (user) => axios.post(`/login`, user);
export const verifyTokenRequest = () => axios.get(`/verify`);

export const getUserRequest = () => axios.get(`/user`);
export const searchUserRequest=(id)=>axios.get(`/user/${id}`);
export const updateUserRequest=(user)=>axios.put(`/user/${user._id}`,user);
export const deleteUserRequest=(id)=>axios.delete(`/user/${id}`);
