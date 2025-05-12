import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/App.css';

import Navigation from './components/Navigation';
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
                <Route pathe="/about" element={<About/>}/>
                <Route pathe="/drivers" element={<Drivers/>}/>
                <Route pathe="/privacy" element={<PrivacyPolicy/>}/>
            </Routes>
            </ Main>
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
