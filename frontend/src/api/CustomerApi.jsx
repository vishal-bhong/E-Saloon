import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const CustomerLogin = (formData) => {
    const result = API.post('/customers/signin', formData); 
    return result;
}

export const registerCustomer = async (formdata) => {
    const result = await API.post('/customers/register', formdata)
    return result;
}
