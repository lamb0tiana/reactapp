/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
const authenticate = (credentials : { username: string, password :string}) => {
    const authUrl : string = process.env.REACT_APP_AUTH_URL || "";
    return axios.post(authUrl, credentials).then(response => {
        const token = response.data.token
        window.localStorage.setItem('authToken', token);
        setAxiostoken(token)
        return token
    })
}

const logout = () => {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers['Authorization']
}

const setAxiostoken = (token) =>{
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

const init  = () => {
    const token = window.localStorage.getItem('authToken') || null;
    const jwtData = jwtDecode(token);
    // console.log(jwtData.exp*1000, new Date().getTime())

    if(token && jwtData.exp * 1000 > new Date().getTime()) setAxiostoken(token)
}
export {authenticate, logout, init};