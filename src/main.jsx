import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RootPage from './pages/rootPage.jsx'
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
  {
    path: "/Contact",
    element: <ContactPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
