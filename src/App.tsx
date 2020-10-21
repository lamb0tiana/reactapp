import React, {useState} from 'react';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"
import Home from "./components/Content/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation";
import {init, isAuthenticated} from "./services/security/authentication";
import AuthContext from "./context/authContext";
init()
function App() {
  const [isLoggedIn, setIsAuthenticated] = useState(isAuthenticated());
  const contextValue = {isAuthenticated: isLoggedIn, setIsAuthenticated};
  return (
      <div className="wrapper">
          <BrowserRouter>
            <Sidebar/>
            <AuthContext.Provider value={contextValue}>
                <div id="content">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" render={props => isLoggedIn ? <Redirect to='/' /> : <Login onLogin={setIsAuthenticated}/> } />
                        <Redirect to={"/"} from="*"/>
                    </Switch>
                </div>
            </AuthContext.Provider>
          </BrowserRouter>
      </div>
  )
}

export default App;
