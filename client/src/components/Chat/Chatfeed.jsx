import { MessageFormSocial } from "react-chat-engine";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage)=>{
        //check if each person has read the message
        return chat.people.map((person, index) => person.last_read ===message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    //function for generating messages
    const renderMessages = () =>{
        //take keys from messages and put them her
        //keys are IDs of specific messages
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            //one specific message
            const message = messages[key];

            //if no messages. return null. If there ARE messages, get the last one
            const lastMessageKey = index === 0? null : keys[index-1] 

            //is the username of the sender the same as mine?
            const isMyMessage = userName === message.sender.username;

            return(
                <div key ={`msg_${index}`} style={{width: '100%'}}>
                    <div className ="message-block">
                        {
                            //if this is my message, run MyMessage. If not, run TheirMessage
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
            
                        }
                    </div>
                    {/* if my message, show up on right. if NOT my message, show up on left */}
                    <div className ="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft:isMyMessage ? '0px' : '68px'}}>
                       { renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }


    if(!chat) return 'Loading...';

    console.log( chat, userName, messages)
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}
                </div>
                <div className="chat-subtitle">
                    {/* subtitle of chat will be username of every person */}
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;