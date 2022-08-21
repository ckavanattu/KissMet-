import React from "react";
import { Nav } from "../components/Nav/index";
import { ChatEngine } from 'react-chat-engine';
    
export const Chat = () => {
   return (
      <div >
          
         <div>
         <ChatEngine
         height="90vh"
			userName='Kissmet'
			userSecret='Kissmet'
			projectID='3e4f1c2d-0f41-4952-81aa-67be8f971e30'
         />
         <Nav className="gradient"></Nav>
         </div>
         
      </div>
      
      
   )
} 
    