import React, { useState } from 'react'
import '../styles/input.css'

const Input = ({ onEnviarInformacion }) => {

    const manejarEnvio = (e) => {
        //evito que recargue la página al enviar el formulario
        e.preventDefault();
        //guardo el mensaje en una variable
        let mensaje = e.target.querySelector('input').value;
        
        //Valido que el mensaje no llegue vacío
        if (mensaje.trim().length > 0 ){
            //Devuelvo la información al padre
            onEnviarInformacion(mensaje);
        }
        //Pongo en blanco el input de nuevo
        document.getElementById('input').value = ""
    };

    return (
        <form className='form' type='submit' onSubmit={manejarEnvio}>
            <div className="input-box">
                <input id='input' className="input" type="text" placeholder='¡Pregúntame algo!' />
            </div>
            <button type="submit" className="button-box"> 📤  </button>
        </form>
    )
}

export default Input


