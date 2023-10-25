import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
