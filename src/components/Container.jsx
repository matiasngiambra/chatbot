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
    let fecha = new Date()
    let data = await fetchData( mensajeEnviadoPorUser )
    let hora= fecha.getHours();
    let minutos = fecha.getMinutes()
    if(minutos <10 ){
      //Si los minutos son entre 0 y 9, le agrego un 0 adelante (Sino muestra la hora tipo 9:4 cuando son 9:04)
      minutos = '0'+minutos;
    }
    setHistoricMessages(prevMessages => [
      ...prevMessages,
      { user: 'usuario', message: mensajeEnviadoPorUser, hora: hora , minutos: minutos },
      { user: 'bot', message: data.title, hora: hora , minutos: minutos }
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
