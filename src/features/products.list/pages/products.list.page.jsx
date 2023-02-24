import { useEffect, useState, useCallback } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { getProducts } from '../../../core/services/products.services';
import { consoleDebug } from '../../../utils/debug';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../../../core/services/local.storage';
import {
    checkIfCacheIsExpired,
    setNextCacheRefreshTime,
} from '../../../utils/cache';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const handleError = (error) => {
        consoleDebug(error);
    };

    const handleLoadProducts = useCallback(async () => {
        console.log('handleLoadProducts');
        let products = getDataLocalStorage('products');
        let isCacheTimeExpired = checkIfCacheIsExpired();

        if (products && !isCacheTimeExpired) {
            setProducts(products);

            return;
        }
        if (isCacheTimeExpired || !products) {
            try {
                const products = await getProducts();
                setProducts(products);
                persistDataLocalStorage('products', products);

                const currentTime = Date.now();
                setNextCacheRefreshTime(currentTime);
            } catch (error) {
                handleError(error);
            }
        }
    }, []);

    useEffect(() => {
        handleLoadProducts();
    }, [handleLoadProducts]);

    return (
        <div>
            <h2>Products List Page</h2>
            <SearchBox></SearchBox>
            <List products={products}></List>
        </div>
    );
}
