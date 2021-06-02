import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import logo from '../assets/images/logo-leaf-blue.png';

function App() {
    return (
        <div className="App">
            <header className="App-header large">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Example Learning Module
        </h1>
                <p>Clicking the link below should navigate to the example topic page.</p>
                <h1><Link to="/topic-1" className="App-link">Topic 1</Link></h1>
            </header>
        </div>
    );
}

export default App;
