import React, { useState } from 'react'
import '../styles/container.css'
import Input from './Input'
import MessageContainer from './MessageContainer'

const Container = () => {

  //UseState de todos los mensajes
  const [historicMessages, setHistoricMessages] = useState([])

  //Fetch de data
  const fetchData = async ( mensajeARecibir ) => {
    //Pasar mensajeARecibir a la api que corresponda;
    console.log(mensajeARecibir)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.status === 200) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleOnSubmitMessage = async (mensajeEnviadoPorUser) => {
    
    let data = await fetchData( mensajeEnviadoPorUser )

    setHistoricMessages(prevMessages => [
      ...prevMessages,
      { user: 'usuario', message: mensajeEnviadoPorUser },
      { user: 'bot', message: data.title }
    ])
  }

  const manejarInformacion = (data) => {
    handleOnSubmitMessage(data);
  };

  return (
    <div className='container-chatbot'>
      <div className='div-chatbot'>
        <h2>🤖 Chatbot 🤖</h2>
      </div>
      <MessageContainer mensajes={historicMessages}></MessageContainer>
      <Input onEnviarInformacion={manejarInformacion}></Input>
    </div>

  )
}

export default Container
