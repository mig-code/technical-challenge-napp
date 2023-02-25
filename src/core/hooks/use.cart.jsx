import { useCallback, useEffect, useState } from 'react';

import { addProductToCart } from '../../core/services/products.services';
import { checkIfCacheIsExpired } from '../../utils/cache';
import { consoleDebug } from '../../utils/debug';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../services/local.storage';

export function useCart() {
    const storageKey = 'cartCount';
    const inititalCartCount = getDataLocalStorage(storageKey) || 0;

    const [cartCount, setCartCount] = useState(inititalCartCount);

    const resetCartCount = useCallback(() => {
        setCartCount(0);
        persistDataLocalStorage(storageKey, 0);
    }, []);

    const handleAddToCart = useCallback(
        async (mobileForm) => {
            try {
                const result = await addProductToCart(mobileForm);
                setCartCount((prevCount) => prevCount + 1);
                persistDataLocalStorage(storageKey, cartCount + 1);
                return result;
            } catch (error) {
                handleError(error);
            }
        },
        [cartCount]
    );

    const getCartCount = useCallback(() => {
        if (!inititalCartCount || checkIfCacheIsExpired()) {
            resetCartCount();
        }
        return cartCount;
    }, [inititalCartCount, cartCount, resetCartCount]);

    useEffect(() => {}, []);

    return {
        resetCartCount,
        getCartCount,
        handleAddToCart,
    };
}

const handleError = (error) => {
    consoleDebug(error);
};
