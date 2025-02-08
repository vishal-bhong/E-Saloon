import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const registerAdmin = async (formdata) => {
    const result = await API.post('/admin/register', formdata)
    return result;
}

export const getAdminProfile = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/admin/profile', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

export const getAllCustomers = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/admin/getCustomers', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

export const deleteCustomer = async (customerId) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.delete(`/admin/delete/customer/${customerId}`, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}