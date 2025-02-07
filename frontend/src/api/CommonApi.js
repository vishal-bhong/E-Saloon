import axios from 'axios' 

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const userSignin = (formData) => {
    const result = API.post('/signin', formData); 
    return result;
}

export const userLogout = async () => {
    const token = localStorage.getItem("jwtToken");

    const result = await API.post('/signout', {} , { 
        headers : { 'Authorization' : 'Bearer ' + token }
    });
    
    return result;
}

