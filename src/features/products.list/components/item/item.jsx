import React from 'react';
import { Link } from 'react-router-dom';

import { MobileImage } from '../../../../core/components/mobile.image/mobile.image';

export function Item({ item }) {
    const { model, id } = item;
    const nameWithoutSpaces = model.replace(/\s/g, '-');
    return (
        <Link to={`/mobile/${nameWithoutSpaces}/${id}`}>
            <div className="mobile-box__image">
                <MobileImage imgUrl={item.imgUrl} altText={item.model} />
            </div>

            <div>
                <p className="mobile-box__brand">{item.brand} </p>
                <p className="mobile-box__model"> {item.model}</p>
            </div>
            {item.price ? (
                <p className="mobile-box__price">{item.price} €</p>
            ) : (
                <p className="mobile-box__price">No disponible</p>
            )}
        </Link>
    );
}
