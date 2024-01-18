import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home';
import Sobre from './pages/sobre';
import Cont from './pages/cont';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import { Countercontextprovider } from './context/Countercontext';
import { TitleColorContextProvider } from './context/TitleColorContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path:"home",
    element:<Home/>
  },

  {
    path:"sobre",
    element:<Sobre/>
  },

  {
    path:"cont",
    element:<Cont/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Countercontextprovider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </Countercontextprovider>
  </React.StrictMode>,
)
  