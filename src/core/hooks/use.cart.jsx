import { useCallback, useEffect, useState } from 'react';

import { addProductToCart } from '../../core/services/products.services';
import {
    checkIfCacheIsExpired,
    setNextCacheRefreshTime,
} from '../../utils/cache';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../services/local.storage';

export function useCart() {
    const storageKey = 'cartCount';
    const inititalCartCount = getDataLocalStorage(storageKey) || 0;

    const [cartCount, setCartCount] = useState(inititalCartCount);

    const handleAddToCart = useCallback(
        async (mobileForm) => {
            if (checkIfCacheIsExpired()) {
                setCartCount(0);
                persistDataLocalStorage(storageKey, 0);
                console.log('NO HA PODIDO AÑADIRSE AL CARRITO');
                const currentTime = Date.now();
                setNextCacheRefreshTime(currentTime);
                return;
            }

            try {
                await addProductToCart(mobileForm);

                setCartCount((prevCount) => prevCount + 1);
                persistDataLocalStorage(storageKey, cartCount + 1);
            } catch (error) {
                console.log(error);
            }
        },
        [cartCount]
    );

    const getCartCount = useCallback(() => {
        console.log('geting cart count');
        if (!inititalCartCount || checkIfCacheIsExpired()) {
            setCartCount(0);
            persistDataLocalStorage(storageKey, 0);
            console.log('INICIANDO CARRITO');
        }
        return cartCount;
    }, [cartCount, inititalCartCount]);

    useEffect(() => {}, []);

    return {
        getCartCount,
        handleAddToCart,
    };
}
