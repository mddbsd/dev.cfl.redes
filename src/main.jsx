//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//CSS
import './css/general.css'
//Componentes
import Home from './componentes/home'

const rutasDev = createBrowserRouter([
  {
    path: "/",
    Component: Home
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rutasDev} />
  </StrictMode>,
)
