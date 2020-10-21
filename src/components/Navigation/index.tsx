import React, {useContext} from "react";
import { NavLink, useHistory} from "react-router-dom";
import {logout} from "../../services/security/authentication";
import AuthContext from "../../context/authContext";

const Navigation = () => {
    const history = useHistory();
    const { isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        logout(() =>{
            setIsAuthenticated(false);
            history.push('/')
        })
    }

    return        (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        {
                            isAuthenticated ?
                        <NavLink onClick={(event) => handleLogout(event)} className="nav-link" to="/logout">Logout</NavLink> :
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        }
                    </li>
                </ul>
            </div>
        </div>
    </nav>)

}

export default Navigation