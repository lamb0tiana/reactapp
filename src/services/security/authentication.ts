/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import axios from 'axios';

const authenticate = (credentials : { username: string, password :string}) => {
    const authUrl : string = process.env.REACT_APP_AUTH_URL || "";
    return axios.post(authUrl, credentials).then(response => {
        const token = response.data.token
        window.localStorage.setItem('authToken', token);
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
        return token
    })
}

export {authenticate};