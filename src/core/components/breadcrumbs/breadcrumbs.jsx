import React from 'react';

import { useLocation, NavLink } from 'react-router-dom';
export const BreadCrumbs = () => {
    const location = useLocation();
    const fullPath = location.pathname;

    const setCleanPath = (path) => {
        let cleanPath = path;
        if (path === '/') return [''];

        if (path.includes('mobile')) {
            cleanPath = path
                .split('/')
                .filter((path) => path !== 'mobile')
                .slice(0, -1);
            return cleanPath;
        }
        return path.split('/');
    };

    const breadcrumbPathArray = setCleanPath(fullPath);

    return (
        <div className="breadcrumbs">
            <ul>
                {breadcrumbPathArray.map((path, index) => {
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
