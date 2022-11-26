import React from 'react'
import Dog from './images/dog'
import Logotipo from './images/logoEnthus'
import '.././styles.css'



 function LogoEfoto (){
    return(
        <div className="logo">
            <div className="tituloLogo">
            <strong className="titulo">Pet-Enthus</strong>
            <Logotipo/>
            </div>
            <Dog />
        </div>

)}

export default LogoEfoto


