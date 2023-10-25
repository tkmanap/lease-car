import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import {RouterProvider} from "react-router-dom";
import {RouterApp} from "./components/RouterApp";
import {store} from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={RouterApp}/>
        </Provider>
    </React.StrictMode>
);
