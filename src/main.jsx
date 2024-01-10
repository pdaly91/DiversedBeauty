import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Policies from './pages/Policies.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "policies",
    element: <Policies />
  },
  {
    path: "contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
