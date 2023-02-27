import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import { BreadCrumbs } from '../breadcrumbs/breadcrumbs';
export function Header() {
    const { cartCount } = useContext(CartContext);
    console.log('rendering header', cartCount);

    return (
        <header>
            <h1>Napp Mobile Shop</h1>
            <BreadCrumbs></BreadCrumbs>
            Cart Count <span>{cartCount}</span>
        </header>
    );
}
