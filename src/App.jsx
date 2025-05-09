import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './assets/styles/App.css';
import Navigation from './components/Navigation';
import MainSection from './components/MainSection.jsx';
import Footer from "./components/Footer.jsx";
import HomePage from "./views/HomePage.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
