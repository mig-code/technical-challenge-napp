import { useEffect, useState, useCallback } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { getProducts } from '../../../core/services/products.services';

import { manageLoadDataSource } from '../../../utils/manage.load.data';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);

    const handleLoadProducts = useCallback(async () => {
        const storageKey = 'products';

        const data = await manageLoadDataSource(getProducts, storageKey);
        setProducts(data);
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
