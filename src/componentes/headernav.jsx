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
        cuando asignamos la variable refNav al atributo ref del elemento al que queremos modificar,
        useRef devuelve un objeto llamado current a travéz del cual podemos acceder a las diferentes
        propiedades del elemento.
     */
    const refNav = useRef(0);
    /**
     * Esta funcion agrega o quita la clase nav_responsivo de la lista de clases del nav
     * refNav: La variable creada con useRef para acceder al elemento nav
     * current: El objeto que devuelve useRef con la referencia al nav (current es el ingles para actual, osea el elemento actual)
     * classList: La propiedad que queremos cambiar, hay multiples propiedades que podemos utilizar, en este caso es la lista de clases (className)
     * toggle: significa Alternar, con esta funcion se agrega la clase si no existe o la quita si existe.
     */

    //md:fixed md:top-0 md:left-0 md:w-full md:flex md:h-full md:items-center md:justify-center md:duration-300
    //max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:flex max-[1024px]:h-full max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:duration-300
    function switchNav(){    
        console.log("tiki");
        refNav.current.classList.toggle("max-[1024px]:-translate-y-full");
    }
    return(
        <>
            <header className=" bg-gray-600 text-white flex items-center justify-between px-2 h-10 [&_a]:mx-4 [&_button]:p-5 [&_button]:invisible [&_button]:max-[1024px]:visible">
                <h1 className="text-blue-100"><a href="/">CFL-414</a></h1>
                <nav className="max-[1024px]:-translate-y-full [&_a]:hover:text-blue-300 [&_a]text-blue-100 duration-350 max-[1024px]:gap-2 max-[1024px]:fixed max-[1024px]:flex max-[1024px]:flex-col  max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:h-full max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:bg-blue-600" ref={refNav}> 
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