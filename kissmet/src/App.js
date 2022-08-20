import React, { useState } from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Chat } from "./components/Chat";
import { Nav } from "./components/Nav";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    // <div className="App">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
    // </div>

    <>
      <Router>
      <div className="home"> 
        <Routes>
          <Route 
            path="/" 
            element={<Home />}  
          />
            
          <Route 
            path="/login" 
            element={<Login />}  
          />  
          <Route 
            path="/register" 
            element={< Register />}  
          /> 
          <Route 
            path="/chat" 
            element={< Chat />}  
          /> 
            <Route 
              path="*" 
              element={<Home />}  
          />
        </Routes>
      </div>
      </Router>
    </>

  );
}

export default App;
