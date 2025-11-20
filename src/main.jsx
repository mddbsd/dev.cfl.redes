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
import Pie from './componentes/pie'
import Redes1 from './componentes/redes1'
import Redes2 from './componentes/redes2'
import Redes3 from './componentes/redes3'
import Redes4 from './componentes/redes4'
import TutoCarrusel from './componentes/tutocarrusel'

const rutasRedes = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/dia1",
    Component: Redes1
  },
  {
    path: "/dia2",
    Component: Redes2
  },
    {
    path: "/dia3",
    Component: Redes3
  },
  {
    path: "/dia4",
    Component: Redes4
  },
  {
    path: "/guias-programacion",
    Component: TutoCarrusel
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderNav />
    <RouterProvider router={rutasRedes} />
    <Pie />
  </StrictMode>,
)
