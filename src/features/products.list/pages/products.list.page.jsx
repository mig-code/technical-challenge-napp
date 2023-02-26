import { useEffect, useState, useCallback, useContext } from 'react';

import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';
import { getProducts } from '../../../core/services/products.services';
import { BreadCrumbsContext } from '../../../core/context/breadcrumb.context';

import { manageLoadDataSource } from '../../../utils/manage.load.data';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);
    const { setBreadcrumbs } = useContext(BreadCrumbsContext);

    const handleLoadProducts = useCallback(async () => {
        const storageKey = 'products';

        const data = await manageLoadDataSource(getProducts, storageKey);
        setProducts(data);
    }, []);

    useEffect(() => {
        handleLoadProducts();
        setBreadcrumbs(['Home', 'Products']);
    }, [handleLoadProducts, setBreadcrumbs]);

    return (
        <div>
            <h2>Products List Page</h2>
            <SearchBox></SearchBox>
            <List products={products}></List>
        </div>
    );
}
