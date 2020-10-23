import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom"
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import {init, isAuthenticated} from "./services/security/authentication";
import AuthContext from "./context/authContext";
import Header from "./components/Header";
import Menu from "./components/Navigation/Menu";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Content/Footer";
init()
function App() {
  const [isLoggedIn, setIsAuthenticated] = useState(isAuthenticated());
  const contextValue = {isAuthenticated: isLoggedIn, setIsAuthenticated};
  return (
          <BrowserRouter>
            <AuthContext.Provider value={contextValue}>
                <Navigation />
                <div className="container">
                    <div id="gototop"></div>
                    <Header/>
                    <Menu/>
                    <div className="row">
                        <Sidebar/>
                        <Content/>
                    </div>
                    <Footer/>
                </div>
            </AuthContext.Provider>
          </BrowserRouter>
  )
}

export default App;
