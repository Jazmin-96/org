import Header from "./componentes/Header/Header";
import Banner from "./componentes/Banner/Banner";
import Footer from "./componentes/Footer/Footer";
import Boton from "./componentes/Boton/Boton";
import { useState } from "react";

function App() {

  const [mostrarNuevo,actualizarPantalla] = useState (true)
  
  const mostrarPag = () => {
    actualizarPantalla(!mostrarNuevo)
  }

  return (
    <div>
     <Header/>
     
     {mostrarNuevo && <Banner/> }
     <Boton mostrarPag = {mostrarPag} />
     
     <Footer/>
    </div>
  );
}

export default App;
