import './App.css';
import React from "react";
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login/login";
import Home from "./pages/login/home";
import AddCards from "./pages/addCards";
import AddDebt from "./pages/cards/addDebt";
import AddAsset from "./pages/cards/addAsset";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/add_cards" element={<AddCards/>}/>
                <Route path="/add_debt" element={<AddDebt/>}/>
                <Route path="/add_asset" element={<AddAsset/>}/>
            </Routes>
        </Router>
    );
}

export default App;
