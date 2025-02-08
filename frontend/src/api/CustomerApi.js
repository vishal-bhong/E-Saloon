import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const registerCustomer = async (formdata) => {
    const result = await API.post('/customers/register', formdata)
    return result;
}

export const getCustomerProfile = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/customers/profile', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}
