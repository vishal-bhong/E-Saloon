import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const registerCustomer = async (formdata) => {
    const result = await API.post('/customers/register', formdata)
    return result;
}
