import React, { useState } from 'react'
import Message from './Message'

const ChatComponent = () => {


    const [historicMessages, setHistoricMessages] = useState([])
    const [messageInput, setMessageInput] = useState('')

    const handleOnSubmitMessage = ( )=>{

        //llamar una api que devuelva algo

        setHistoricMessages(prevMessages => [
            ...prevMessages,
            { user: 'usuario', message: messageInput },
            { user: 'bot', message: 'test' }
        ])
    }

    return (
        <div className="chatbot">
          <div className="chatbot-messages">
            {historicMessages.map((message, index) => (
              <div key={index} className={`message ${message.user}`}>
                <Message enviadoPor={ message.user }  > {message.message} </Message>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={handleOnSubmitMessage}>Send</button>
        </div>
      );
}

export default ChatComponent

