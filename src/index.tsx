import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';
import Topic from './components/Topic';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="topic-1" element={<Topic />} />
            </Routes>

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
