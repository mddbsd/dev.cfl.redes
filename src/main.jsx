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

const rutasDev = createBrowserRouter([
  {
    path: "/",
    Component: Home
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecera />
    <RouterProvider router={rutasDev} />
    <Pie />
  </StrictMode>,
)
