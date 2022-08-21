import React from "react";
import { Nav } from "../components/Nav/index";
import { ChatEngine } from 'react-chat-engine';
    
export const Chat = () => {
   return (
      <div>
         <Nav></Nav>
         <ChatEngine
         height="100vh"
			userName='Kissmet'
			userSecret='Kissmet'
			projectID='3e4f1c2d-0f41-4952-81aa-67be8f971e30'
         />
      </div>
      
   )
} 
    