import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
export function Header() {
    const { cartCount } = useContext(CartContext);

    return (
        <header>
            <h1>Napp Mobile Shop</h1>
            <p>Inicio</p>
            Cart Count <span>{cartCount}</span>
        </header>
    );
}
