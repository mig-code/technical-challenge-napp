import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/index.scss';
import { CartContextProvider } from './core/context/cart.provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartContextProvider>
            <Router>
                <App></App>
            </Router>
        </CartContextProvider>
    </React.StrictMode>
);
