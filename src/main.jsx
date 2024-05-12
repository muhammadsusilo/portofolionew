import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css';
import Navbar from "./Fragments/Navbar";
import Footer from './Pages/Footer';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<h1>Hello React</h1>,
  },
  {
    path:"Navbar",
    element:< Navbar/>
  },
  {
    path:"Footer",
    element:< Footer/>
  },
  
  {
    path:"Home",
    element:< Home/>
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
