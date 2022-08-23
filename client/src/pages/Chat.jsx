import React from "react";
import { Nav } from "../components/Nav/index";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/Chat/Chatfeed'
    
export const Chat = () => {
   return (
      <div >
          
         <div>
         <ChatEngine
         height="85vh"
			userName='test'
			userSecret='test'
			projectID='3e4f1c2d-0f41-4952-81aa-67be8f971e30'
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
         <Nav className="gradient"></Nav>
         </div>
         
      </div>
      
      
   )
} 
    