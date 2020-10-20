/**
 * @author("tiana.randrianarivony@gmail.com")
 */
import React, {FormEvent, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./login.css";
import {authenticate} from "../../services/security/authentication";
const Login = ({onLogin} ) => {
    const [credentials, setCredentials] = useState({ username : 'user1@test.com', password : '0000' });
    const [error, setError] = useState('')
    const history = useHistory();

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setCredentials({...credentials, [name] : value})
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try{
           const token = await authenticate(credentials, () => {
               onLogin(true);
               history.push('/');
           })
        }catch (e) {
            setError(e.response.data.message)
        }
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