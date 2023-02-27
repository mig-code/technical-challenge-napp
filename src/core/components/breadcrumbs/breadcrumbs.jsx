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
            {breadcrumbPathArray.map((path) => {
                if (path === '') {
                    return <NavLink to="/">Móviles</NavLink>;
                } else {
                    return <NavLink to={`${fullPath}`}>{path}</NavLink>;
                }
            })}
        </div>
    );
};
