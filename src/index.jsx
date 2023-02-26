import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/index.scss';
import { CartContextProvider } from './core/context/cart.provider';
import { BreadCrumbsContextProvider } from './core/context/breadcrumb.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BreadCrumbsContextProvider>
            <CartContextProvider>
                <Router>
                    <App></App>
                </Router>
            </CartContextProvider>
        </BreadCrumbsContextProvider>
    </React.StrictMode>
);
