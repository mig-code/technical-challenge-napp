import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

export function CartCount() {
    const { cartCount } = useContext(CartContext);

    return (
        <div>
            Cart Count <span>{cartCount}</span>
        </div>
    );
}
