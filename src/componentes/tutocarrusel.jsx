//Componentes de react-syntax-highlighter, este paquete nos deja formatear código fuente
//como contenido de un elemento HTML.
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from "react";
import { useRef } from "react";
//Estos componentes son de react-icons, una libreria que nos da iconos en forma de tipografía
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';



export default function TutoCarrusel(){
    /*
      Con useState podemos cambiar diferentes aspectos del DOM de manera dinamica. Pero cada vez que
      cambian sus valores, provocan un re-renderizado. Esto funciona en la mayoría de los casos
      pero cuando nuestra aplicación escala en complejidad, se ve afectado su rendimiento. Hay otras maneras
      más optimas de resolver esto, utilizando el modificador group por ejemplo.
    */
    const [controlGap, setControlGap] = useState();
    const [controlGrid, setControlGrid] = useState(true);
    const [controltranslate, setControlTranslate] = useState(0);
    
    const switchFlex = () =>{
        controlGrid ? setControlGrid(false) : setControlGrid(true);
        console.log(controlGrid)
    }

    /*
        Template Literals

        Ya sabemos que en JS las cadenas de caracteres se representan con comillas dobles o simples, pero aca
        se utiliza, tildes invertidas. Estas se llaman plantillas de cadenas de texto, o template literals.
        Ofrecen ciertas caracteristicas diferentes a las cadenas tradicionales.
            - Cadena multilinea: Se pueden utilizar multiples lineas para definir el la cadena.
            - Paso de variables: Se pueden pasar variables facilmente utilizando ${variable}
        
        ejemplo:
            Cadena tradicional: Hay que concatenar los valores de las variables con las cadenas.
                const nombre = "Lionel Messi";
                const saldo = 200;
                console.log("Bienvenido " + nombre + ". Su saldo actual es: " + saldo + "$");
            
            Plantilla de cadeanas: podemos pasar la variable directamente a la cadena.
                const nombre = "Lionel Messi":
                const saldo = 200;
                console.log(`Bienvenido ${nombre}. Su saldo actual es: ${saldo}$`);
        
        Las cadenas de esta funcion se utilizan en el componente SyntaxHighlighter del paquete react-syntax-highlighter"
        para renderizar codigo fuente.
    */
    const paso1 = `function Carrusel(){
      return(
      <div id='envolturaprincipal' className='flex'>
        <div id='botonera' className='flex gap-10'>
          <button className="bg-red-500 text-white rounded border border-amber-300">sig</button>
          <button className="bg-red-500 text-white rounded border border-amber-300">ant</button>
        </div>
          <div id='contenidocarrusel'>
            <img src="https://placehold.co/600x400" alt="placeholder1" /> 
          </div>
        </div>
        )
    }`

    const paso2 = `function Carrusel(){
        return(
            <div id='envolturaprincipal' className='grid grid-cols-1 justify-items-center'>
                <div id='botonera' className="flex justify-center gap-10">
                    <button className="bg-red-500 text-white rounded border border-amber-300">sig</button>
                    <button className="bg-red-500 text-white rounded border border-amber-300">ant</button>
                </div>
                <div id='contenidocarrusel' className="grow overflow-hidden" >
                    <div id="elementoscarrusel" className="flex">
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder1" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder2" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder3" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder4" /> 
                    </div>
                </div>
            </div>
        )
    }`

    const paso3 = `function Carrusel(){
        const [indiceActual, setIndiceActual] = useState(0);
        const cantidadElementos = 4;

        const botonDerecha = () => {
            setIndiceActual((indiceActual + 1) % cantidadElementos);
        }

        const botonIzquierda = () => {
            setIndiceActual((indiceActual - 1 + cantidadElementos) % cantidadElementos);
        }
        return(
            <div id='envolturaprincipal' className='grid grid-cols-1 justify-items-center w-1/2'>
                <p>valor indice actual: {indiceActual}</p>
                <div id='botonera' className="flex justify-center gap-10">
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonIzquierda}><SlArrowLeft /></button>
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonDerecha}><SlArrowRight /></button>
                </div>
                <div id='contenidocarrusel' className="grow overflow-hidden" >
                    <div id="elementoscarrusel" className="flex" style={{ transform: \`translateX(-\${valorTranslateString}%)\` }}>
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder1" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/orange/white" alt="placeholder2" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/red/white" alt="placeholder3" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/yellow/black" alt="placeholder4" /> 
                    </div>
                </div>
            </div>
        )
    }`

    const paso4 =  `<div id="elementoscarrusel" className="flex transition-transform duration-500"`

    function CarruselPaso1(){
        return(
            <div id='envolturaprincipal' className={controlGrid ? 'grid grid-cols-1 justify-items-center' : ""}>
                <div id='botonera' className="flex justify-center" style={{gap: `${controlGap}px`}}>
                    <button className="bg-red-500 text-white rounded border border-amber-300">sig</button>
                    <button className="bg-red-500 text-white rounded border border-amber-300">ant</button>
                </div>
                <div id='contenidocarrusel' className="">
                    <img src="https://placehold.co/600x400" alt="placeholder1" /> 
                </div>
            </div>
        )
    }

    function CarruselPaso2(){
        return(
            <div id='envolturaprincipal' className='grid grid-cols-1 justify-items-center w-1/2'>
                <div id='botonera' className="flex justify-center gap-10">
                    <button className="bg-red-500 text-white rounded border border-amber-300">sig</button>
                    <button className="bg-red-500 text-white rounded border border-amber-300">ant</button>
                </div>
                <div id='contenidocarrusel' className="grow overflow-hidden" >
                    <div id="elementoscarrusel" className="flex transition-transform duration-500" style={{ transform: `translateX(-${controltranslate}%)` }}>
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder1" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/orange/white" alt="placeholder2" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/red/white" alt="placeholder3" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/yellow/black" alt="placeholder4" /> 
                    </div>
                </div>
            </div>
        )
    }

    function CarruselPaso3(){
        const [indiceActual, setIndiceActual] = useState(0);
        const cantidadElementos = 4;

        const botonDerecha = () => {
            setIndiceActual((indiceActual + 1) % cantidadElementos);
        }

        const botonIzquierda = () => {
            setIndiceActual((indiceActual - 1 + cantidadElementos) % cantidadElementos);
        }
        return(
            <div id='envolturaprincipal' className='grid grid-cols-1 justify-items-center w-1/2'>
                <p>valor indice actual: {indiceActual}</p>
                <div id='botonera' className="flex justify-center gap-10">
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonIzquierda}><SlArrowLeft /></button>
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonDerecha}><SlArrowRight /></button>
                </div>
                <div id='contenidocarrusel' className="grow overflow-hidden" >
                    <div id="elementoscarrusel" className="flex " style={{ transform: `translateX(-${indiceActual * 100}%)` }}>
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder1" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/orange/white" alt="placeholder2" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/red/white" alt="placeholder3" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/yellow/black" alt="placeholder4" /> 
                    </div>
                </div>
            </div>
        )
    }

    function CarruselPaso4(){
        const [indiceActual, setIndiceActual] = useState(0);
        const cantidadElementos = 4;

        const botonDerecha = () => {
            setIndiceActual((indiceActual + 1) % cantidadElementos);
        }

        const botonIzquierda = () => {
            setIndiceActual((indiceActual - 1 + cantidadElementos) % cantidadElementos);
        }
        return(
            <div id='envolturaprincipal' className='grid grid-cols-1 justify-items-center w-1/2'>
                <div id='botonera' className="flex justify-center gap-10">
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonIzquierda}><SlArrowLeft /></button>
                    <button className="bg-gray-300 text-1xl p-2 rounded-full" onClick={botonDerecha}><SlArrowRight /></button>
                </div>
                <div id='contenidocarrusel' className="grow overflow-hidden" >
                    <div id="elementoscarrusel" className="flex transition-transform duration-500" style={{ transform: `translateX(-${indiceActual * 100}%)` }}>
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400" alt="placeholder1" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/orange/white" alt="placeholder2" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/red/white" alt="placeholder3" /> 
                        <img className="shrink-0 w-full" src="https://placehold.co/600x400/yellow/black" alt="placeholder4" /> 
                    </div>
                </div>
            </div>
        )
    }

    return(
    <section id="tuto-carrusel" className="bg-blue-400">
        <div id="contenedor" className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
            <div id="contenido" className="max-w-5xl">
                <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">Carrusel con TailwindCss + Js</h2>
                <hr/> 
                <p className="mb-4">Hay diversas maneras de crear un carrusel de imagenes, pero esta en particular me parece adecuada para entender varios conceptos, no solo de ReactJS, sino también de Tailwindcss y estilos en generál.</p>
                <p className="mb-4">La función que contiene el carrusel esta dentro de este mismo componente.</p>    
                <SyntaxHighlighter children={paso1} language="javascript" style={sunburst} />
                <p>Es una simple estructura con algunos colores para diferenciar los elementos. Tiene 2 botones y un contenedor con una imagen de muestra sacada de <a href="https://placehold.co" className="underline text-white">https://placehold.co</a></p>
                <div id="control-visualizador">
                    {/*
                        Acá encontre una buena guia para armar los sliders
                        https://www.geeksforgeeks.org/reactjs/how-to-add-input-slider-in-react-js/
                    */}
                    <p>Estos controles solo estan para demostrar como cambian los elementos con diferentes valores en los estilos, pueden controlar los atributos flex del contenedor principal y el gap de la botonera para que vean como se reflejan los cambios.</p>
                    <label>Con grid o sin grid: </label>
                    <button onClick={switchFlex} className={"rounded-lg p-2 " + (controlGrid ? 'bg-lime-300' : 'bg-red-500')}>{controlGrid ? "ON" : "OFF"}</button><br/>
                    <label>Cambiando el gap se separan los elementos: gap: {controlGap}px</label><br/>
                    <input type="range" min="1" max="100" defaultValue={controlGap} onChange={(e) => setControlGap(e.target.value)} />
                </div>
                <CarruselPaso1 />
                <p>El contenedor principal tiene un display grid de una columna con justify-items-center para alinear todos los elementos del carrusel, podemos ajustar facilmente el tamaño con la clase w-. ahora lo configuré con w-2xl. Ahora preparamos el contenedor de imagenes.</p>
                <SyntaxHighlighter children={paso2} language="javascript" style={sunburst} />
                <p>El primer contenedor (contenidocarrusel) tiene la propiedad grow para que el elemento flex ocupe todo el espacio disponible y overflow-hidden para evitar que se vean los elementos desbordados</p>
                <p>Elementoscarrusel contiene todos los elementos (en este caso imagenes) que queremos mostrar, este se desplazara en el eje x, el display es flex para que se posicionen uno al lado del otro, la idea es posicionar los elementos en fila e ir desplazandolos hacia los lados con los botones. transition-transform y duration-500 establecen el comportamiento cuando se desplazan y la duracion de la animación.</p>
                <p>Cada uno de los elementos de elementoscarrusel tiene 2 propiedades shrink-0 para evitar que se achique el item y w-full para que ocupe todo el ancho, de esta manera, todos los items se posicionan horizontalmente y quedan ocultos fuera de su contenedor.</p>
                <CarruselPaso2 />
                <div id="control-visualizador">
                    <label>Prueben mover el slider para ver como se deslizan los elementos</label><br/>
                    <input type="range" min="1" max="300" defaultValue={controltranslate} onChange={(e) => setControlTranslate(e.target.value)} />
                </div>
                <p>Ahora un poco de JavaScript, tenemos que configurar los botones para que muevan el valor del translate desde 0% hasta el 300%. Cada elemento del carrusel, al tener la propiedad grow heredada de su elemento padre, ocupa el 100% del espacio disponible, por ende, el primer elemento ocupa el 0%, el segundo el 100%, el tercero el 200% y asi por cada uno.</p>
                <SyntaxHighlighter children={paso3} language="javascript" style={sunburst} />
                <CarruselPaso3 />
                <p>Listo! con esto ya tenemos las clases y las funciones configuradas para el carrusel de imagenes. Ahora solo quedaría darle un poco más de movimiento.</p>
                <p>Con la clase transition-transofrom en el contenedor de imagenes, establecemos la animacion de transicion al transformarse (literalmente lo que dice la clase), y duration- establece la duración de la transicion en milisegundos</p>
                <SyntaxHighlighter children={paso4} language="javascript" style={sunburst} />
                <CarruselPaso4 />
                
            </div>
        </div>
    </section>
    )
}