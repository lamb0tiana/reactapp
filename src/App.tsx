import React from 'react';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"
import Home from "./components/Content/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation";

function App() {
  return (
      <div className="wrapper">
          <BrowserRouter>
            <Sidebar/>
                <div id="content">
                    <Navigation/>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Redirect to={"/"} from="*"/>
                    </Switch>
                </div>
          </BrowserRouter>
      </div>
  )
}

export default App;
