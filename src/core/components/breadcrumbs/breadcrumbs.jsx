import React from 'react';

import { useLocation, NavLink } from 'react-router-dom';
export const BreadCrumbs = () => {
    const location = useLocation();
    console.log('rendering breadcrumbs', location.pathname);

    const fullPath = location.pathname;
    const pathArray = fullPath
        .split('/')
        .filter((path) => path !== 'mobile')
        .slice(0, -1);

    console.log('pathArray', pathArray);

    // remove the last element of the array

    return (
        <div className="breadcrumbs">
            <ul>
                {pathArray.map((path, index) => {
                    if (path === '') {
                        return (
                            <li key={index}>
                                <NavLink to="/">Móviles</NavLink>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <NavLink to={`${fullPath}`}>{path}</NavLink>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};
