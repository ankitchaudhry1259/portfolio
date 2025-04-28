import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/pages/Home';
import Project from './component/pages/Project';
import Certificates from './component/pages/Certificates.js'
import Skills from './component/pages/Skills.js'
import About from './component/pages/About';
import Contact from './component/pages/Contact';

const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'project',
        element:<Project/>
      },
      {
        path:'certificates',
        element:<Certificates/>
      },
      {
        path:'skills',
        element:<Skills/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);