import { Conker, IConkerConfig } from 'conker-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';

const config: IConkerConfig = {
    endpoint: process.env.REACT_APP_CONKER_URL ?? '',
    key: process.env.REACT_APP_CONKER_CLIENT_KEY ?? '',
    secret: process.env.REACT_APP_CONKER_CLIENT_SECRET ?? '',
}

Conker.init(config);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
