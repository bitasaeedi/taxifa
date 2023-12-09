import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n.js'
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppProvider>
            <App/>
        </AppProvider>
    </BrowserRouter>
);

