import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa" //esta dependencia es react-icons, tiene una serie de iconos en formato de fuente tipografica, mas faciles de manejar que iconos en formato imagen. Como todo paquete, se instala con npm install react-icons. El argumento install se puede reducir, solamente cambiandolo por i
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
        cuando asignamos la variable refNav al atributo ref del elemento al que queremos modificar,
        useRef devuelve un objeto llamado current a travéz del cual podemos acceder a las diferentes
        propiedades del elemento.
     */
    const refNav = useRef(0);
    /**
     * Esta funcion agrega o quita la clase max-[660px]:-translate-y-full de la lista de clases del nav.
     * 
     * refNav: La variable creada con useRef para acceder al elemento nav
     * current: El objeto que devuelve useRef con la referencia al nav (current es el ingles para actual, osea el elemento actual)
     * classList: La propiedad que queremos cambiar, hay multiples propiedades que podemos utilizar, en este caso es la lista de clases (className)
     * toggle: significa Alternar, con esta funcion se agrega la clase si no existe o la quita si existe.
     * 
     * max-[660px]:-translate-y-full permite al nav ser responsivo usando las clases de tailwind
     * la primera parte max-[660px]: es el breakpont (como md: lg: sm: etc), se aplica la propiedad
     * -translate-y-full cuando la pantalla es inferior a 660px, translate mueve los elementos
     * HTML, en este caso los mueve hacia arriba todo el nav hasta que desaparece.
     * Alternando esta clase, el nav queda oculto en pantallas menores a 660px y lo muestra cuando tocamos
     * el boton.
     */

    function switchNav(){    
        refNav.current.classList.toggle("max-[660px]:-translate-y-full");
    }
    return(
        <>
            <header className=" bg-gray-600 text-white flex items-center justify-between px-2 h-10 [&_a]:mx-4 [&_button]:p-5 [&_button]:invisible [&_button]:max-[660px]:visible">
                <h1 className="text-blue-100"><a href="/">CFL-414</a></h1>
                <nav className="max-[660px]:-translate-y-full [&_a]:hover:text-blue-300 [&_a]text-blue-100 duration-350 max-[660px]:gap-2 max-[660px]:fixed max-[660px]:flex max-[660px]:flex-col  max-[660px]:top-0 max-[660px]:left-0 max-[660px]:w-full max-[660px]:h-full max-[660px]:items-center max-[660px]:justify-center max-[660px]:bg-blue-600" ref={refNav}> 
                    <a href="dia1">Día 1</a>
                    <a href="dia2">Día 2</a>
                    <a href="dia3">Día 3</a>
                    <a href="dia4">Día 4</a>
                    <a href="#">Día 5</a>
                    <button className="absolute top-2 right-2" onClick={switchNav}>
                        <FaTimes />
                    </button>
                </nav>
                <button onClick={switchNav}>
                    <FaBars />
                </button>
            </header>
        </>
    )
}