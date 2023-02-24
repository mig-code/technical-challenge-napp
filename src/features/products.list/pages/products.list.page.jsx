import { useEffect, useState, useCallback } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { getProducts } from '../../../core/services/products.services';
import { consoleDebug } from '../../../utils/debug';
import {
    getStorageList,
    setStorageList,
} from '../../../core/services/local.storage';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const handleError = (error) => {
        consoleDebug(error);
    };

    const handleLoadProducts = useCallback(async () => {
        let products = getStorageList('products');
        let cacheTimeHasEnded = false;

        if (products && !cacheTimeHasEnded) {
            setProducts(products);
            console.log('Load products from local storage');
            return;
        }
        if (cacheTimeHasEnded || !products) {
            try {
                const products = await getProducts();
                setProducts(products);
                setStorageList('products', products);
                console.log('Loaded products from server');
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
