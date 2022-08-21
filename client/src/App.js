import React, { useState } from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Chat } from "./components/Chat";
import { Nav } from "./components/Nav";


import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// establish connection to /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div className="flex-column justify-flex-start min-100-vh">
//         <Header />
//         <div className="container">
//           <Home />
//         </div>
//         <Footer />
//       </div>
//     </ApolloProvider>
//   );
// }

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <ApolloProvider client={client}>
      <Router>
      <div> 
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
      </ApolloProvider>
    </>

  );
}


export default App;
