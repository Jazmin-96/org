import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/index"
import Boton from "../Boton"


const Formulario = (props)  =>   {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearEquipo }=props

    const manejarEnvio = (e) => {
        e.preventDefault()  
        console.log("Manejar el envio")
         let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
        <h2>
        Rellena el formulario para crear el colaborador.
        <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
        />
        <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto"
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
        />
        <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos ={props.equipos}
        />
        <Boton>
            Crear
        </Boton>

      
        </h2>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
        <h2>
        Rellena el formulario para crear el equipo.
        <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
        />
        <CampoTexto 
            titulo="Color" 
            placeholder="Ingresar el color en Hex"
            required 
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
        />
        <Boton>Registrar equipo</Boton>

        </h2>
        </form>
    </section>
}

export default Formulario