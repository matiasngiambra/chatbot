import React, { Children } from 'react'
import '../styles/message.css'

const Message = ({ enviadoPor, minutos, hora, children }) => {

    const classEnviado = (enviadoPor) => {
        if (enviadoPor == 'bot') {
            return 'message message-robot'
        } else if (enviadoPor == 'usuario') {
            return 'message message-persona'
        } else {
            return 'error'
        }
    }

    const enviadoIcon = (enviadoPor) => {
        if (enviadoPor == 'bot') {
            return '🤖'
        } else if (enviadoPor == 'usuario') {
            return '👨🏻'
        } else {
            return 'error'
        }
    }

    const enviadoSpan = (enviadoPor) => {
        if (enviadoPor == 'bot') {
            return `El bot respondió a las ${hora}:${minutos}`
        } else if (enviadoPor == 'usuario') {
            return `Escribiste a las ${hora}:${minutos}`
        } else {
            return 'error'
        }
    }

    return (
        <div className={classEnviado(enviadoPor)} >
            <div className='message-text'>
                <span className='span-from'> {enviadoSpan(enviadoPor)} </span>
                <p> {children} </p>
            </div>
            <div className='message-icon'>
                <div> {enviadoIcon(enviadoPor)} </div>
            </div>
        </div>
    )
}

export default Message
