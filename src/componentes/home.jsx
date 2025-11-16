//import portada from '../img/intro-portada.jpg'

export default function Home(){
    return(
        <>
            <div className='bg-emerald-50 w-full flex flex-col items-center'>
                <div className='w-2xl max-[660px]:w-full flex flex-col items-center'>
                    <h2>Introducción a las redes domésticas</h2>
                    <img className="w-2xl sm:w-full" src="/intro-portada.jpg" />
                    <div className='text-justify [&_p]:max-[660px]:mx-2'>
                        <p>Las redes informáticas estan presentes en todos casi todos los aspectos de nuestra vida cotidiana, las encontramos en todos los hogares con un servicio de internet, en la calle con los servicios móbiles y haste en algunos elevtrodomésticos (<b>IoT</b>).</p>
                        <p>A finales de la decada del 60 se estableció la primera comunicación entre 2 ordenadores con la creacion de <b>ARPANET</b>, esta nueva manera de comunicación sirvio como base para lo que hoy conocemos como internet.<br/>Con el paso del tiempo y el avance tecnológico, las computadoras se volvieron cada vez más accesibles, por lo que fue necesario crear diferentes protocolos y medios de comunicación para facilitar la transmisión de datos.</p>
                        <h3>¿Pero que son las redes informáticas?</h3>
                        <p>Cuando hablamos de redes, nos referimos simplemente a una serie de reglas y protocolos que definen como se comunican 2 o mas computadoras. Estas se conectan fisicamente a travéz de un medio, que puede ser cableado o inalámbrico.<br/>Se dividen en categorías segun su alcance.<br/>Los enlaces se establecen con diferentes dispositivos que se encuentran entre las PCs, modems, routers, switchs, acces points, entre otros.</p>
                        <h3>Objetivos del curso</h3>
                        <p>Este es un curso (muy) acelerado de redes, está dividido en 5 días donde cubriremos los aspectos más importantes de redes domesticas para determinar fallos, y configuraciones básicas muy comunes en nuestro día a día como Técnicos de PC</p>
                    </div>
                </div>
            </div>
        </>
    )
}