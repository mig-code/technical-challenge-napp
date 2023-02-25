import React, { useMemo } from 'react';
import { useCart } from '../hooks/use.cart';
import { CartContext } from './cart.context';

export function CartContextProvider({ children }) {
    const { getCartCount, handleAddToCart } = useCart();

    const context = useMemo(
        () => ({
            cartCount: getCartCount(),
            handleAddToCart,
        }),
        [getCartCount, handleAddToCart]
    );

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
}
