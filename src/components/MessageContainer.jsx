import React, { useEffect, useRef, useState } from 'react'
import Message from '../components/Message'
import '../styles/messageContainer.css'

const MessageContainer = ({ mensajes }) => {
  //Guardo la referencia del "ultimo mensaje" para que siempre al escribir, vaya al final de la conversación
  const scrollRef = useRef(null)
  const autoScroll = () => {
    scrollRef.current.scrollIntoView();
  }

  useEffect( ()=> {
    autoScroll()
  }, [mensajes])

  return (
    <>
      <div className='messageContainer'>
        {mensajes.map((message, index) => (
          <Message key={index} enviadoPor={message.user} hora={message.hora}  minutos={message.minutos}> {message.message} </Message>
        ))}

        <div ref={scrollRef}></div>
      </div>



    </>
  )
}

export default MessageContainer
