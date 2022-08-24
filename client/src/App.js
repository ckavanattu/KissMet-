import React, { useState } from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { createContext } from "react";

import './App.css';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Nav } from "./components/Nav";
import { CreateProfile } from "./pages/CreateProfile";


import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const ThemeContext = createContext(null);

// establish connection to /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ThemeContext.Provider>
      <div className="App" id="light">
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">

        <div className="container">
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
                path="/createProfile"
                element={<CreateProfile />}
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
        
      </div>
      </Router>
    </ApolloProvider>
    </div>
    </ThemeContext.Provider>
  );
}


export default App;
