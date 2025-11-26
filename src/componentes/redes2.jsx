import { useState } from 'react';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import catEthernet from '../json/categoriasethernet.json'
import tiposEthernet from '../json/tiposethernet.json'

export default function Redes2(){
    /*
        Los componentes no necesariamente tienen que existir en su propio archivo, los podemos
        definir dentro de otros componentes e invocarlos directamente.
        Recuerden que las funciones son simplemente bloques de código reutilizable, las definimos
        (entre otras cosas) para evitar escribir código de más, nos brindan una caja cerrada que acepta datos,
        los procesa y devuelve el resultado de dicho proceso.
    */
    function TablaEthernet(){
        return(
            <div id="comp-tabla-ethernet" className='max-[660px]:text-xs'>
                <table className="w-full table-fixed max-[660px]:table-auto border border-collapse [&_th]:border [&_th]:border-blue-600 [&_td]:border [&_td]:border-blue-600">
                    <thead className='text-center'>
                        <tr>
                            <th>Categoría</th>
                            <th>Ancho de banda</th>
                            <th>Velocidad</th>
                            <th>Propósito</th>
                            <th>Blindaje</th>
                        </tr>
                    </thead>
                    <tbody className='text-left text-sm [&_td]:p-1'>
                        {
                            /**
                             * Captura y utilización de objetos y mapas
                             * 
                             * Esta pequeña secuencia de código es de lo más útil para generar contenido dinámico.
                             * La función map() toma un array y crea una función por cada uno de los elementos que contiene.
                             * Veamos el array de objetos catEthernet, esta definido en su propio archivo (categoriasethernet.json)
                             * que contiene todos los elementos con los que quiero llenar la tabla.
                             * Lo importamos muy facilmente de esta manera:
                             * 
                             * import catEthernet from '../json/categoriasethernet.json'
                             * 
                             * Ahora podemos invokar a la funcion map
                             * 
                             * catEthernet.map()
                             * 
                             * .map() tiene 3 parametros, el primero es obligatorio (categoria), y almacena cada uno de los objetos del array.
                             * el segundo es opcional (index) y contiene el indice, que es la posicion donde se encuentra el objeto dentro del array,
                             * este indice le sirve a react para mantener un seguimiento de cada uno de los elementos.
                             * Hay un tercer parametro opcionial que almacena un array pero no se usa en este caso.
                             * 
                             * Ya que map separa los elementos del array catEthernet en elementos individuales, estos renderizan todos los <tr> necesarios para cada uno.
                             * vean como se insertan los atributos del objeto categoria en el contenido de los <td>.
                             * De esta manera, si queremos agregar o quitar filas de la tabla, ya no tenemos que escrobir un nuevo <tr> con sus correspondientes <td>
                             * simplemente agregamos un objeto nuevo al archivo .json y automaticamente se agrega al sitio.
                             * Pueden probar creando un nuevo <td> que muestre la variable indice, van a ver como
                             * muestra la posicion de los elementos en el array
                             */
                            catEthernet.map((categoria, indice) => (
                                <tr key={indice}>
                                    <td>{categoria.cat}</td>
                                    <td>{categoria.adb}</td>
                                    <td>{categoria.vel}</td>
                                    <td>{categoria.prop}</td>
                                    <td>{categoria.blin}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    /*
        El objetivo es crear un carrusel de elementos, cada elemento es un div en forma de ficha con
        texto y una imagen. Usando la técnica de captura de objetos, podemos escribir la información y
        las referencias a las imagenes en un archivo .json y volcar los datos en las fichas de manera
        dinámica, si eventualmente agrego mas objetos al archivo, estos renderizarán nuevas fichas.

        Para Lograrlo necesitamos 2 botones que muevan las fichas hacia los lados, pero hay un problema.
        Las funciones de manipulación del DOM en React no funcionan de la misma manera que en JS. No podemos 
        usar document.getElementById().innerHTML ya que este expone nuestro sitio a
        ataques del tipo cross-site scripting (XSS).

        Podemos utilizar una técnica similar a la del componente HeaderNav, donde activamos o desactivamos una clase
        en la lista de clases a travéz de la funcion toogle del elemento creado con useRef(), pero se me ocurre que
        podemos cambiar el estilo directamente, particularmente la propiedad CSS transform. Esta en combinación con 
        la funcion translateX, va corriendo las fichas hacia los costados.
    */

    function CarruselEthernet(){
            /*
                Con useState inicializamos la variable indiceActual en 0, con esto podemos medir el ancho total de
                todas las fichas cargadas. Cada vez que haya un cambio en indiceActual, useState hace una nueva renderización
            */
            const [indiceActual, setIndiceActual] = useState(0);
            //Almacenamos el tamaño del array tiposEthernet para calcular el valor numérico de índiceActual
            const cantidadFichas =  tiposEthernet.length;

            /**
             * fichaSiguiente incrementa el indiceActual en 1, pero no es suficiente con eso. Si tenemos
             * 5 fichas en total, e indiceActual llego a 5, cuando se vuelva a invocar a la función,
             * esta lo incrementará a 6. Esto es un problema, ya que seguiría incrementandose en indices
             * que no existen, por eso se hace el cálculo de l módulo con la cantidad total de fichas.
             * 
             * (5 + 1) % 5 = 0
             * 
             * De esta manera, la variable indiceActual siempre vuelve a 0 cuando llegue a la cantidad 
             * máxima de fichas.
             */
            function fichaSiguiente(){
                setIndiceActual((indiceActual + 1) % cantidadFichas);
                console.log("indiceActual: ", indiceActual); //esta instruccion está para que vean en la consola como cambia el valor de indiceActual
            }
            /**
             * Igual a la función anterior. Luego de la resta se le suma la cantidad de fichas
             * para evitar llegar a números negativos.
             */
            function fichaAnterior(){
                setIndiceActual((indiceActual - 1 + cantidadFichas) % cantidadFichas);
            }
            return(
                <div id="comp-carrusel-ethernet" className="grid grid-cols-1">
                    <div id="botonera" className='flex justify-center gap-10 w-full [&>button]:p-3 [&>button]:rounded [&>button]:bg-gray-300'>
                        <button
                            className=""
                            onClick={fichaAnterior}>
                            <SlArrowLeft />
                        </button>
                        <button
                            className=""
                            onClick={fichaSiguiente}>
                            <SlArrowRight />
                        </button>
                    </div>
                    <div className="overflow-hidden grow">
                        {/*
                            De la misma manera que con la tabla, generamos las fichas de manera dinámica.
                            la función translateX mueve el componente hacia los lados en determinado porcentaje
                            , multiplicamos el indice actual * 100 ya que se mueve el conjunto entero de divs uno al lado del otro.
                            al primer elemento le corresponde el 100%, al segundo el 200% y asi con todos los elementos que
                            existan en el array.
                        */}
                        <div className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${indiceActual * 100}%)` }}>
                        {tiposEthernet.map((ficha, indice) => (
                            <article key={indice} className="float shrink-0 w-full">
                                <h4>{ficha.tipo}</h4>
                                <p><img src={ficha.img} className='float-left w-1/3 h-1/3'/>{ficha.desc}</p>
                            </article>
                        ))}
                        </div>
                    </div>
                    {/* El problema del overflow eran los botones en combinacion con la clase
                        shrink-0 del carrusel, que evita que el contenido se achique. La clase es necesaria
                        para utilizar el carrusel, asi que para solucionarlo movi los botones arriba en su
                        propio div para acomodarlos como flex
                    */}
                
                    </div>
            )
    }

    
    const [indiceRed, setIndiceRed] = useState(0);
 
    return(
        <>
            <div id="contenedorprincipal "className='bg-emerald-50 w-full flex flex-col items-center [&_a]:text-underline [&_a]:text-blue'>
                <div id="contenido" className='w-2xl max-[660px]:w-full flex flex-col items-center'>
                    <div id="titulo">     
                        <img className="w-2xl sm:w-full" src="/redes2-portada.jpg" />
                        <h2>Medios de transmisión</h2>
                    </div>
                    
                    <div id="seccion" className='text-justify [&_p]:max-[660px]:mx-2'>
                        <p>Podemos dividir los medios de transmision en 2 grandes grupos: Cableado e inalambrico. Una red cableada transmite los bits en forma de señales eléctricas o pulsos de luz, mientras que las inalámbricas utilizan radiofrecuencias (tambien se pueden utilizar señales de luz infraroja, pero es tan lento que no se usa en redes amplias). Cada medio tiene sus ventajas y desventajas, pero se utilizan en conjunto dependiendo del diseño de la red.</p>
                        <div id="menuredes" className='flex gap-x-4'>
                            <h2><button className="hover:translate-x-0.5" type="button" onClick={() => setIndiceRed(0)}>Redes cableadas</button></h2>
                            <h2><button className="hover:translate-x-0.5" type="button" onClick={() => setIndiceRed(1)}>Redes inalámbricas</button></h2>
                        </div>
                        <hr />
                        <div className='overflow-hidden'>
                            <div id="contenidoredes" className='flex' style={{ transform: `translateX(-${indiceRed * 100}%)` }} >
                                <div id="cableadas" className='shrink-0 w-full'>
                                    <p>Los medios cableados son principalmente 3: Coaxial, Fibra óptica y cable <a href="https://es.wikipedia.org/wiki/Ethernet"><b>Ethernet</b></a>. Cada tipo de cable es estandarizado y se subdivide en diferentes categorías con diferentes características. En este curso vamos a cubrir en profundidad sólo el par trenzado ya que es el que es el que se utiliza en redes domésticas y pequeñas empresas.</p>
                                    <div className='text-justify [&_p]:max-[660px]:mx-2'>
                                        <h3>Par trenzado / Cable Ethernet</h3>
                                        <p>El par trenzado es el cable más frecuente en redes pequeñas y grandes. Está compuesto por pares de cables diferenciados con colores, y trenzados para evitar la interferencia que generan los cables adyacentes (<a href="https://es.wikipedia.org/wiki/Diafon%C3%ADa">diafonía</a>). Algunas categorías tienen un mallado que funciona como blindaje de interferencias externas.<br/>Actualmente está dividido en 8 categorías y 3 subcategorías (con el tiempo podrían agregarse más) con diferentes propositos</p>
                                        <TablaEthernet />
                                        <p>En redes informaticas se utilizan desde la categoria 5 en adelante, todas estas tienen 4 pares de cables trenzados. Estas estan divididas en 3 tipos de cable según su blindaje.</p>
                                        <CarruselEthernet />                        
                                    </div>
                                    <h2>Armado de cables</h2>
                                    <p>T568A:Blanco/verde, verde. Blanco/naranja, azul. Blanxo/Azul, verde. Blanco/marron Marron.  
                                    T568B:Blanco/Naranja, naranja. Blanco/Verde, Azul. Balanco/azul, Verde. Blanco/marron, Marron</p>
                                </div>
                                <div id="wireless" className='shrink-0 w-full'>
                                    <p>Las redes inalambricas, wireless en ingles, permiten la comunicación entre dispositivos a travéz del aire, normalmente utilizando radiofrecuencias. Hay una gran variedad de tecnologías RF para crear redes: Wifi, Bluethoot, GPRS, infrarojo, entre otros. Cada una utiliza diferentes bandas del <a href="https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico">espectro electromagnético</a> y su implenentación es definida por las dimensiones de la red.</p>
                                    <p>La tecnología mas común en redes informaticas pequeñas y medianas es <a href="https://es.wikipedia.org/wiki/Wifi">WiFi</a>, que utiliza radiofrecuencias paraa establecer enlaces y esta gobernado por la normativa <a href="https://en.wikipedia.org/wiki/IEEE_802">IEEE 802</a></p>
                                    <p>WiFi esta dividida en 2 bandas:</p>
                                    <ul>
                                        <li>2.4GHz: Son los estándares IEEE 802.11b, IEEE 802.11g e IEEE 802.11n, cuyo manejo es internacional y permite velocidades de 11 Mbit/s, 54 Mbit/s y 300 Mbit/s respectivamente. Es el tipo que cuenta con mayor interferencia, dado que la banda de 2,4 GHz es también empleada por bluetooth y otros sistemas inalámbricos.</li>
                                        <li>5GHz: El tipo más moderno de conexiṕn WiFi, conocido como “WIFI 5” y que aplica el estándar IEEE 802.11ac. Se maneja en un canal completamente nuevo y aún libre de interferencias, por lo que, a pesar de ser una tecnología reciente y de tener la desventaja de un 10 % menos de distancia de alcance, se le considera sumamente conveniente dada su estabilidad y velocidad.</li>
                                    </ul> 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}