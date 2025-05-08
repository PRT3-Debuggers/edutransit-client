import React from 'react';
import './assets/styles/App.css';
import Navigation from './components/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <div className="main-content">
                <h1>Edu Transit Web Client!</h1>
            </div>
        </>
    );
}

export default App;
