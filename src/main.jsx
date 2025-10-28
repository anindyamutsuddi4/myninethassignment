import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DocumentMeta from "react-document-meta";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Carddetail from './Components/Carddetail';
import Cards from './Components/Cards';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import Login from './Components/Login';
import Privateroute from './Components/Privateroute';
import Detailinfo from './Components/Detailinfo';
import Profile from './Components/Profile';
import { ToastContainer } from 'react-toastify';
import Errorpage from './Components/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{
      index: true,
      Component: Home,
    }
      , {
      path: "/carddetail",
      loader: () => fetch('data.json'.then(res => res.json()))
      ,
      Component: Carddetail
    }, {
      path: "/cards",
      loader: () => fetch('/data.json').then(res => res.json()),
      Component: Cards,
    },
    {
      path: "/register",
      Component: Register
    }, {
      path: "/login",
      Component: Login
    }, {
      path: "/detailinfo/:id",
      loader: () => fetch("data.json"),
      element:
        <Privateroute><Detailinfo></Detailinfo></Privateroute>
    }, {
      path: "/profile",
      element:
        <Privateroute><Profile></Profile></Privateroute>

    }, {
      path: "*",
      Component: Errorpage
    }
    ]
  }, {
    path: "*",
    Component: Errorpage
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
