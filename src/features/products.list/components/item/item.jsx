import React from 'react';
import { Link } from 'react-router-dom';
import { MobileImage } from '../../../../core/components/mobile.image/mobile.image';
import './item.scss';

export function Item({ item }) {
    const { model, id } = item;
    const nameWithoutSpaces = model.replace(/\s/g, '-');
    return (
        <Link to={`/mobile/${nameWithoutSpaces}/${id}`}>
            <div className="mobile-box__image">
                <MobileImage imgUrl={item.imgUrl} altText={item.model} />
            </div>

            <p className="mobile-box__model">
                {item.brand}
                <span className="mobile-box__model--mobile">{item.model}</span>
            </p>
            {item.price ? (
                <p className="mobile-box__price">{item.price} €</p>
            ) : (
                <p className="mobile-box__price mobile-box__price--not-available">
                    No disponible
                </p>
            )}
        </Link>
    );
}
