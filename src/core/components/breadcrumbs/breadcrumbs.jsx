import React, { useContext } from 'react';
import { BreadCrumbsContext } from '../../context/breadcrumb.context';
export const BreadCrumbs = () => {
    const { breadcrumbs } = useContext(BreadCrumbsContext);

    return (
        <div className="breadcrumbs">
            {breadcrumbs.map((breadcrumb, index) => (
                <div key={index} className="breadcrumb">
                    {breadcrumb}
                </div>
            ))}
        </div>
    );
};
