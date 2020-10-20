import React, {useState} from 'react';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"
import Home from "./components/Content/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation";
import {init} from "./services/security/authentication";
const isLoggedIn = init()
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn)
  return (
      <div className="wrapper">
          <BrowserRouter>
            <Sidebar/>
                <div id="content">
                    <Navigation isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated}/>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" render={props => isAuthenticated ? <Redirect to='/' /> : <Login onLogin={setIsAuthenticated}/> } />
                    <Redirect to={"/"} from="*"/>
                    </Switch>
                </div>
          </BrowserRouter>
      </div>
  )
}

export default App;
