import './App.css';
import React from "react";
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
  );
}

export default App;
