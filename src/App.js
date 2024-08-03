import React from "react";
import Relogio from './relogio'
import './App.css'
import  Logo from'./logo_transparent.png'

const App = () =>{

    return(
        <div className="tc">
            <p><img className="w-20" src={Logo} alt="logo"/></p>
            <p className='white'>Recurso de sonoro a cada 1 minuto...</p>
            <Relogio/>     
        </div>
    )
}
export default App;