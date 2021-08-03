import { Conker, IConkerConfig } from 'conker-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';
import Topic from './components/Topic';

const config: IConkerConfig = {
    endpoint: process.env.REACT_APP_CONKER_URL ?? '',
    username: process.env.REACT_APP_CONKER_CLIENT_USER ?? '',
    password: process.env.REACT_APP_CONKER_CLIENT_PASS ?? '',
}

Conker.init(config);

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
