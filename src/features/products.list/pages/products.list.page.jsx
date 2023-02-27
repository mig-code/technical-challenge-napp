import { useEffect, useState, useCallback } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { Loading } from '../../../core/components/loading/loading';

import { getProducts } from '../../../core/services/products.services';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { filterByModelAndBrand } from '../../../utils/search.filters';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    console.log('RENDER: ProductsListPage');

    const filteredProducts = filterByModelAndBrand(products, searchQuery);

    const handleLoadProducts = useCallback(async () => {
        const storageKey = 'products';

        const data = await manageLoadDataSource(getProducts, storageKey);

        setIsLoading(false);
        setProducts(data);
    }, []);

    useEffect(() => {
        handleLoadProducts();
    }, [handleLoadProducts]);

    return (
        <div>
            <h2>Products List Page</h2>
            <SearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            ></SearchBox>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <List products={filteredProducts}></List>
            )}
        </div>
    );
}
