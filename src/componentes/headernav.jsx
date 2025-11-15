import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
export default function HeaderNav(){
    /*
        Para hacer una barra responsiva hay que definir primero la estructura de la barra.
        Primero diseñamos la barra con los elementos y luego agregamos los estilos para
        configurar el comportamiento responsivo. El objetivo es tener una barra superior
        que colapse al encontrarse con pantallas mas pequeñas y nos de un boton donde podemos 
        desplegar la barra en el lateral izquerdo.
    */
    /*
        useRef funciona de manera similar a useEffect pero sin causar un re-renderizado al momento
        de actualizarse. Lo podemos utilizar para acceder a un elemento del DOM de manera directa. 
     */
    const refNav = uesRef();
    return(
        <>
            <header>
                <h1>logo</h1>
                <nav ref={refNav}>
                    <a href="intro">Introducción</a>
                    <a href="#">Definicion y tipos</a>
                    <a href="#">Dispositivos</a>
                    <a href="#">Medios</a>
                    <a href="#">Transmision y protocolos</a>
                    <a href="#">Configuración windows</a>
                    <button>
                        <FaTimes />
                    </button>
                </nav>
                <button>
                    <FaBars />
                </button>
            </header>
        </>
    )
}