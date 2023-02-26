import { createContext } from 'react';
import React from 'react';
import { useState } from 'react';

export const BreadCrumbsContext = createContext();

export function BreadCrumbsContextProvider({ children }) {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const context = {
        breadcrumbs,
        setBreadcrumbs,
    };

    return (
        <BreadCrumbsContext.Provider value={context}>
            {children}
        </BreadCrumbsContext.Provider>
    );
}
