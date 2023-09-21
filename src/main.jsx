import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Container from './components/Container'
import ChatComponent from './components/ChatComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header></Header>
    <div className='conteiner-class'>
      <Container></Container>
    </div>


  </>

)
