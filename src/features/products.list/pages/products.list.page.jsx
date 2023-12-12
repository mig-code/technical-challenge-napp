import { useCallback, useEffect, useState } from 'react';
import { LoadingLong } from '../../../core/components/loading.long/loading.long';
import { getProducts } from '../../../core/services/products.services';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
import { filterByModelAndBrand } from '../../../utils/search.filters';
import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
        <>
            <h1 className="layout-children__title">
                ¡Encuentra el mejor móvil al mejor precio!
            </h1>
            <SearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            ></SearchBox>
            {isLoading ? (
                <LoadingLong></LoadingLong>
            ) : (
                <List products={filteredProducts}></List>
            )}
        </>
    );
}
