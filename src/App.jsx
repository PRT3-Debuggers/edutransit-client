import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/App.css';
import HomePage from "./views/HomePage.jsx";
import About from './pages/About';
import Drivers from './pages/Drivers';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
