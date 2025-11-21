//Componentes de react-syntax-highlighter, este paquete nos deja formatear código fuente
//como contenido de un elemento HTML.
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//Estos componentes son de react-icons, una libreria que nos da iconos en forma de tipografía
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';


export default function TutoCarrusel(){
    //Paso 1: estructura del carrusel
    //Atentos, podemos definir los componentes como funciones flecha.
    
    const paso1 = `
    Function Carrusel(){
        <div id='envolturaprincipal' className='flex'>
            <div id='botonera' className=''>

            </div>
            <div id='contenidocarrusel'>

            </div>
        </div>
    }`
    /**
     * La estructura de este ejemplo es sencilla, tenemos una sección de botonera y la sección del contenido.
     * Ambos en sus correspondientes divs para poder acomodarlos como flex o grid.
     * Estas 2 estructuras estan a su vez envueltas por un div principal
     * Antes que nada definimos el tipo de display, vamos a usar flex.
     */
    function Carrusel(){

        <div id='envolturaprincipal' className='flex'>
            <div id='botonera' className=''>

            </div>
            <div id='contenidocarrusel'>

            </div>
        </div>
    }

    return(
    <section id="tuto-carrusel" className="bg-blue-400">
        <div id="contenedor" className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
            <div id="contenido" className="max-w-5xl">
                <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">Carrusel con TailwindCss + Js</h2>
                <hr/> 
                <p className="mb-4">Hay diversas maneras de crear un carrusel de imagenes, pero esta en particular me parece adecuada para entender varios conceptos, no solo de ReactJS, sino también de Tailwindcss y estilos en generál.</p>
                <p className="mb-4">La función que contiene el carrusel esta dentro de este mismo componente.</p>    
                <SyntaxHighlighter children={paso1} language="javascript" style={tomorrowNightEighties} />
            </div>
        </div>
        <div></div>
    </section>
    )
}