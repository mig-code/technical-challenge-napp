import { Item } from '../item/item';

export function List({ products }) {
    console.log('rendering list');
    return (
        <section className="search-grid">
            {products.map((item) => (
                <article key={item.id}>
                    <Item item={item}></Item>
                </article>
            ))}
        </section>
    );
}
