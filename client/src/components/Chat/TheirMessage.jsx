const TheirMessage = ({ lastMessage, message }) => {

    //if it is not the last message OR if the last message sender username is not equal to my username
    //will return Boolean value
    const isFirstMessageByUSer = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className="message-row">
            {isFirstMessageByUSer && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                    //if they have an avatar, show it as background image if its the first message by user
                />
            )}
            {/* if message contains an image, link the image */}
            {message?.attachments?.length > 0
                ?(
                <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ marginLeft: isFirstMessageByUSer ? '4px' : '48px'}}
                />
                ) : ( //if not image, render it as text on the left
                    <div className="message" style={{float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUSer ? '4px' : '48px'}}>
                        {message.text}
                    </div>
                )
            }
        </div>
    );
}

export default TheirMessage;