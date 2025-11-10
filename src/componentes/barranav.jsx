export default function BarraNav(){

    return(
        <nav id="navbar" className="bg-amber-200 w-full">
            <div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><a href="./" className="hover:text-blue-500 transition-colors">Home</a></li>
                    <li><a href="./calendario" className="hover:text-blue-500 transition-colors">Calendario</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Formulario</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors">Calculadora</a></li>
                </ul>
            </div>
        </nav>
    )
}