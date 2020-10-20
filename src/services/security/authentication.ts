/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
const authenticate = (credentials : { username: string, password :string}, success : CallableFunction) => {
    const authUrl : string = process.env.REACT_APP_AUTH_URL || "";
    return axios.post(authUrl, credentials).then(response => {
        const token = response.data.token
        window.localStorage.setItem('authToken', token);
        setAxiostoken(token)
        if(success !== undefined) success();
        return token
    })
}

const logout = (callable : CallableFunction) => {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers['Authorization']
    if(callable !== undefined) callable();
}

const setAxiostoken = (token) =>{
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

const init  = () :boolean => {
    const token = window.localStorage.getItem('authToken') || null;
    const jwtData = token ? jwtDecode(token) : null;
    const isAuthenticated  = (jwtData && jwtData.exp * 1000 > new Date().getTime()) || false;
    if(isAuthenticated) {setAxiostoken(token)}
    return isAuthenticated;
}
export {authenticate, logout, init};