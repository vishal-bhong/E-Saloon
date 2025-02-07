import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const registerBarber = async (formdata) => {
    const result = await API.post('/barber/register', formdata)
    return result;
}
