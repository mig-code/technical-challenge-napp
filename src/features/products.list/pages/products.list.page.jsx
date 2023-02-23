import { useEffect, useState } from 'react';
import { getAllMobilesMock } from '../../../mocks/mobiles';
import { List } from '../components/list/list';
import { SearchBox } from '../components/search.box/search.box';

export default function ProductsListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getAllMobilesMock());
    }, []);

    return (
        <div>
            <h2>Products List Page</h2>
            <SearchBox></SearchBox>
            <List products={products}></List>
        </div>
    );
}
