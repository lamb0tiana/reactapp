/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import React, {FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import "./login.css";
import axios from "axios";
const Login = (props: any) => {
    const [credentials, setCredentials] = useState({ username : 'user1@test.com', password : '0000' });
    const [error, setError] = useState('')

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setCredentials({...credentials, [name] : value})
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const authUrl : string = process.env.REACT_APP_AUTH_URL || "";
        const token = await axios.post(authUrl, credentials).then(response => response.data.token).catch(error=> setError(error.response.data.message))

        window.localStorage.setItem('authToken', token);
        axios.defaults.headers['Authorization'] = `Bearer ${token}`
        props.history.push('/')
    }

    return <>
                <div className="body"></div>
                <div className="grad"></div>
                <div className="header">
                    <div><Link to={"/"}>My<span>App</span></Link></div>
                </div>
                <br/>
                <form className="login" onSubmit={handleSubmit}>
                    <input type="text" className={" is-invalid"} required placeholder="username" name="username" value={credentials.username} onChange={handleChange}/><br />
                    <input type="password" required placeholder="password" name="password"  value={credentials.password} onChange={handleChange}/><br />
                    { error !== '' && <p className="invalid-feedback">{error}</p> }
                    <input type="submit" className={"btn btn-primary"} value="Login" />
                </form>
            </>
}

export default Login;