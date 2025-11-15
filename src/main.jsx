//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//CSS
import './css/general.css'
//Componentes
import HeaderNav from './componentes/headernav'
import Home from './componentes/home'
import Cabecera from './componentes/cabecera'
import Pie from './componentes/pie'
import BarraNav from './componentes/barranav'
import Calendario from './componentes/calendario'
import Autos from './componentes/autos'

const rutasDev = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/calendario",
    Component: Calendario
  },
  {
    path: "/autos",
    Component: Autos
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderNav />
      <RouterProvider router={rutasDev} />
    <Pie />
  </StrictMode>,
)
