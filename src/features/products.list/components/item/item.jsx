import React from 'react';
import { Link } from 'react-router-dom';

export function Item({ item }) {
   
    return (
        <Link to={`/mobile/${item.id}`}>
            <div>
                <img
                    className="mobile-box__image"
                    src={item.imgUrl}
                    alt={item.model}
                />
            </div>

            <div>
                <p className="mobile-box__brand">{item.brand} </p>
                <p className="mobile-box__model"> {item.model}</p>
            </div>
            <p className="mobile-box__price">{item.price} €</p>
        </Link>
    );
}
