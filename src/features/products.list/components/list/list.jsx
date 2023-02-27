import { Item } from '../item/item';

export function List({ products }) {
    console.log('RENDER: List')
    return (
        <section className="search-grid">
            {products.map((item) => (
                <article key={item.id}>
                    <Item item={item}></Item>
                </article>
            ))}
            {products.length === 0 && (
                <p>No hay productos que coincidan con la búsqueda</p>
            )}
        </section>
    );
}
