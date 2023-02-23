import { useEffect, useState, useCallback } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { getProducts } from '../../../core/services/products.services';
import { consoleDebug } from '../../../tools/debug';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const handleError = (error) => {
        consoleDebug(error);
    };

    const handleLoadProducts = useCallback(async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (error) {
            handleError(error);
        }
    }, []);

    useEffect(() => {
        console.log('ProductsListPage useEffect');
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
