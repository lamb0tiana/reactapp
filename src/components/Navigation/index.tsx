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
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="topNav">
                <div className="container">
                    <div className="alignR">
                        <div className="pull-left socialNw">
                            <a href="#"><span className="icon-twitter"></span></a>
                            <a href="#"><span className="icon-facebook"></span></a>
                            <a href="#"><span className="icon-youtube"></span></a>
                            <a href="#"><span className="icon-tumblr"></span></a>
                        </div>
                        <NavLink exact to="/"> <span className="icon-home"></span> Home</NavLink>
                        {
                            !isAuthenticated ?
                            <NavLink  to="/login"><span className="icon-user"></span> My Account</NavLink>:
                            <NavLink  to="/logout" onClick={(event) => handleLogout(event)}><span className="icon-user"></span> Logout</NavLink>
                        }
                        <a href="register.html"><span className="icon-edit"></span> Free Register </a>
                        <a href="contact.html"><span className="icon-envelope"></span> Contact us</a>
                        <a href="cart.html"><span className="icon-shopping-cart"></span> 2 Item(s) - <span
                            className="badge badge-warning"> $448.42</span></a>
                    </div>
                </div>
            </div>
        </div>)

}

export default Navigation