export default function Redes1(){
    
    
    
    return(
        <>
            <div className='bg-emerald-50 w-full flex flex-col items-center'>
                <div className='w-2xl max-[660px]:w-full flex flex-col items-center'>
                    <h2>Comunicación entre dispositivos</h2>
                    <img className="w-2xl sm:w-full" src="/redes1-portada.png" />
                    <div className='text-justify [&_p]:max-[660px]:mx-2'>
                        <p>Las computadoras tienen un gran poder de procesamiento, pero por si solas son ciegas, no tienen manera de comunicarse con el exterior. Para establecer un enlace se necesitan dispositivos especificamente diseñados para enviar y recibir la información.<br/>Existe una gran variedad de dispositivos, vamos a enumerar los más importantes.</p>
                        <div className="float">
                            
                            <div className="flex flex-col">
                                <h3>Adaptador de red (NIC)</h3>
                                <p><img className="float-left w-1/3 h-1/3" src="/redes1-nic.jpeg" />Esta pieza de hardware es la encargada de establecer las comunicaciones (puede ser cableado o inalámbrico). Envia y recibe cadenas de bits a travez de un medio físico.<br/>Podemos conectar 2 computadoras directamente con los NICs, esto es lo que se llama una red punto a punto. Tienen que ser configurados en el sistema operativo</p>
                                
                            </div>
                        </div>
                        <div className="float">
                            <div className="flex flex-col">
                                <h3>Conmutador (Switch)</h3>
                                <p> <img className="float-right w-1/3 h-1/3" src="/redes1-switch.jpeg" />Se utiliza para conectar más de 2 computadoras. reciben los paquetes de datos y los reenvian a sus destinos directamente. Los switchs hogareños suelen venir con 4, 8 o 16 puertos donde se conectan los dispositivos en una red local (<b>LAN</b>). Los más comunes no requieren ningun tipo de configuración,</p>
                            </div>
                        </div>
                        <div className="float">
                            <div className="flex flex-col">
                                <h3>Punto de acceso (AP)</h3>
                                <p> <img className="float-left w-1/3 h-1/3" src="/redes1-ap.jpeg" />Para conexiones inalámbricas, el access point crea una red para conectar los diferentes dispositivos inalámbricos, a su vez, esta red se puede conectar a una cableada.</p>
                            </div>
                        </div>
                        <div className="float">
                            <div className="flex flex-col">
                                <h3>Enrutador (Router)</h3>
                                <p> <img className="float-right w-1/3 h-1/3" src="/redes1-router.jpeg" />También llamado Puerta de enlace o Gateway, es la pieza clave de todas las comunicaciones a nivel global. A diferencia del switch que envía los paquetes de datos en la red local, el router tiene una lista con caminos especifico (rutas) para enviarlos. Se utiliza para establecer conexiones entre redes diferentes.<br/>En los hogares es el encargado de comunicar los dispositivos de la red local con internet. Se suele configurar a travez de una interfaz gráfica a la que accedemos desde una PC, pero algunos se pueden configurar con una terminal de comandos (<b>CLI</b>).</p>
                            </div>
                        </div>
                        <div className="float">
                            <div className="flex flex-col">
                                <h3>Terminal de red óptica (ONT)</h3>
                                <p> <img className="float-left w-1/3 h-1/3" src="/redes1-ont.jpeg" />El trabajo del las ONTs es transformar las señales eléctricas de los dispositivos de red en pulsos de luz que se envían por fibra óptica.</p>
                            </div>
                        </div>
                    </div>
                    <h2>¡Todos en uno!</h2>
                    <img className="w-2xl sm:w-full" src="/redes1-aio.jpeg" />
                    <div>
                       <p>Cada uno de los dispositivos cumple su rol por separado, pero en redes domésticas estos vienen incorporados en una sola caja. Esta comprime las funcionalidades del switch, router, ap y ont.<br/>El proveedor de servicios entrega estos dispositivos a los clientes, pero se pueden comprar por separado y diseñar diversas arquitecturas de red. Desde su interfaz se pueden configurar aspectos como el nombre de la red inalámbrica y su contraseña, funcionalidades de enrutamiento, firewall, entre otros.<br/>Existen multiples combinaciones de estos dispositivos en el mercado para diferentes usos.<br/></p>
                    </div>
                </div>
            </div>
        </>
    )
}