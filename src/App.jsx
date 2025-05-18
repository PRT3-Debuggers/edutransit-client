import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/App.css';
import Navigation from './components/Navigation';
import MainSection from './components/MainSection.jsx';
import Footer from "./components/Footer.jsx";
import HomePage from "./views/HomePage.jsx";

import Footer from './components/Footer';
import About from './pages/About';
import Drivers from './pages/Drivers';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Navigation />
            <Main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
                <Route path"/privacy" element={<PrivacyPolicy/>}/>
            </Routes>
            </ Main>
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
