import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css';
import Navbar from "./Fragments/Navbar";
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path:"/",
    element:<h1>Hello React</h1>,
  },
  {
    path:"Home",
    element:< Home/>
  },
  {
    path:"About",
    element:< About/>
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
