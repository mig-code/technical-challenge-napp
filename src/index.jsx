import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App></App>
        </Router>
    </React.StrictMode>
);
