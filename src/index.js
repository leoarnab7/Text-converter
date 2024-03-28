import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import TextForm from './Components/TextForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  { path: "/",
   element: <App/>
 },
  { path: "/about",
   element: <About/>
 },
 
 ])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
    
  </React.StrictMode>
);


reportWebVitals();
