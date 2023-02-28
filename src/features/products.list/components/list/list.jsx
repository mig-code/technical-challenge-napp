import { Item } from '../item/item';

export function List({ products }) {
    return (
        <>
            <div className="list-grid">
                {products.map((item) => (
                    <article className="mobile-box" key={item.id}>
                        <Item item={item}></Item>
                    </article>
                ))}
            </div>
            <div className="list-not-found">
                {products.length === 0 && (
                    <p>
                        No hay móviles que coincidan con la búsqueda. Pruebe
                        con otra palabra.
                    </p>
                )}
            </div>
        </>
    );
}
