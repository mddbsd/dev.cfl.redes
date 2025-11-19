import { useState } from "react";
import arrayFichas from '../json/fichas.json'

export default function Carrusel(){
    const [indiceActual, setIndiceActual] = useState(0);
    const cantidadFichas =  arrayFichas.length;

    function fichaSiguiente(){
        setIndiceActual((indiceActual + 1) % cantidadFichas);
    }

    function fichaAnterior(){
        setIndiceActual((indiceActual - 1 + cantidadFichas) % cantidadFichas);
    }

    return(
   <div className="relative">
      <div className="carousel overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-500"
          style={{ transform: `translateX(-${indiceActual * 100}%)` }}
        >
          {arrayFichas.map((ficha, indice) => (
            <div key={indice} className="carousel-item flex-shrink-0 w-full">
              <h4>{ficha.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
        onClick={fichaAnterior}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
        onClick={fichaSiguiente}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    )

}