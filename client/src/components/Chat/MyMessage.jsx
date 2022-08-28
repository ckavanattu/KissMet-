const MyMessage = ( { message }) => {

    //if message contains an image, link the image
    if(message?.attachments?.length > 0){
        return(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right'}}
            />
        )
    }
    
    //if not image, render it as text
    return(
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;