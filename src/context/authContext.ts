/**
 * @author("tiana.randrianarivony@gmail.com")
 */

import React from "react";
type authContext = {
    isAuthenticated :boolean,
    setIsAuthenticated: (value : boolean) => void
}

const AuthContext = React.createContext<authContext>({isAuthenticated : false, setIsAuthenticated: (value:boolean) => {}})

export default AuthContext;