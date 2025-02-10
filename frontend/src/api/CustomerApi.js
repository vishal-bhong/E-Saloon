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

export const getAllBarbers = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/customers/getBarbers', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

export const getBarberProfile = async (barberId) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get(`/customers/getBarber/${barberId}`, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}


export const getPaymentOrder = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/customers/createOrder', { 
        headers : { 'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json' }
    });
    
    return result?.data;
}

export const bookAppointmentToShop = async (barberId) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.post(`/customers/bookAppointment/${barberId}`, {}, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

export const getAllAppointments = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/customers/appointments', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result?.data;
}