export default function Redes3(){
    
    
    
    return(
        <>
            <div id="contenedorprincipal "className='bg-emerald-50 w-full flex flex-col items-center [&_a]:text-underline [&_a]:text-blue'>
                <div id="contenido" className='w-2xl max-[660px]:w-full flex flex-col items-center'>
                    <div id="titulo">     
                        <img className="w-2xl sm:w-full" src="/redes3-portada.jpg" />
                        <h2>Tipos de red</h2>
                    </div>
                    <div id="seccion">
                        <p>Dependiendo de la escala de la red, las dividimos en diferentes tipos:</p>
                        <ul className="list-disc">
                            <li>PAN: Personal Area Network, son redes de alcance personal, se suelen utilizar para la conexion de perifericos, normalmente con bluethoot.</li>
                            <li>LAN: Local Area Network, nuestra area de trabajo, para pequeñas redes como casas u oficinas, pueden ser cableadas con UTP o WiFi</li>
                            <li>MAN: Metropolitan Area Network, abarcan grandes distancias pero limitadas a sectores geograficos como municipios o localidades. No tenemos acceso directo a estas redes, se suelen utilizar como pasarela. Las conexiones se realizan con fibra optica o WiMAX</li>
                            <li>WAN: Wide Area Network, redes de alta capacidad utilizadas para conectar multiples redes metropolitanas. La WAN mas conocida es internet.</li>
                        </ul>
                        <img src="redes3-wanmanpan.png"></img>
                        <h3>Direcciones:</h3>
                        <p>Hay 2 tipos de direcciones en la red: Direccion MAC (física), Direccion IP (Lógica)</p>
                    </div>
                </div>
            </div>
        </>
    )
}