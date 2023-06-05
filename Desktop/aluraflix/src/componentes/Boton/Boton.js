import {useState} from "react"
import "./Boton.css"

const Boton = (props) => {
    return <button className="boton1" onClick={props.mostrarPag}>Nuevo video</button>
    
}

export default Boton