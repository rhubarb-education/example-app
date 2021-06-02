import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo-leaf-blue.png';

const Topic = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Example Learning Module - Topic
            </h1>
                <p>Navigating directly to this URL or reloading this page should result in this page being displayed.<br /> The URL should read https://...../topic-1. <br />
                    <br></br>
                    <a className="App-link" href="https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing"
                        target="_blank"
                        rel="noopener noreferrer">Learn more</a></p>

                <h1><Link to="/" className="App-link">Back</Link></h1>
            </header>
        </div>
    );
}

export default Topic;