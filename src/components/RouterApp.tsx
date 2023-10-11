import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Catalog from "../pages/Catalog/Catalog";
import Contact from "../pages/Contact/Contact";
import App from "../App";


export const CATALOG_ROUTE = '/catalog'
export const HOME_ROUTE = '/home'
export const CONTACT_ROUTE = '/contact'

export const RouterApp = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: CATALOG_ROUTE,
                element: <Catalog/>
            },
            {
                path: CONTACT_ROUTE,
                element: < Contact/>
            },
            {
                path: HOME_ROUTE,
                element: <Home/>
            }
        ]
    }
])