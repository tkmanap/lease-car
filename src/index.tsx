import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import {RouterProvider} from "react-router-dom";
import {RouterApp} from "./components/RouterApp";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={RouterApp}/>
    </React.StrictMode>
);
