//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//CSS
import './css/general.css'
//Componentes
import Home from './componentes/home'
import Cabecera from './componentes/cabecera'
import Pie from './componentes/pie'
import BarraNav from './componentes/barranav'
import Calendario from './componentes/calendario'

const rutasDev = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/calendario",
    Component: Calendario
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecera />
    <div className=''>
      <BarraNav />
      <RouterProvider router={rutasDev} />
    </div>
    <Pie />
  </StrictMode>,
)
