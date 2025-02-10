import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const registerBarber = async (formdata) => {
    const result = await API.post('/barber/register', formdata)
    return result;
}


export const getBarberProfile = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/barber/profile', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}


export const updateBarberProfile = async (formData) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.put('/barber/update/profile', formData, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });

    return result;
}


export const getAllStylesByToken = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/barber/style/byToken', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}


export const addNewStyle = async (formData) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.post('/barber/style/byToken', formData, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });

    return result;
}


export const deleteHairStyle = async (hairStyleId) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.delete(`/barber/style/${hairStyleId}`, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

export const getAllAppointments = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.get('/barber/appointments', { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result?.data;
}


export const updateAppointmentStatus = async (appointmentId, status) => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.put(`/barber/updateAppointmentStatus/${appointmentId}`, { status }, { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });

    return result?.data;
}