import axios from 'axios';

const API='https://api-rest-d8pr.onrender.com:10000/api'
export const verPh = () => axios.get(`${API}/ph`,)

