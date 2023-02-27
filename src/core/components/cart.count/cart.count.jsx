import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart.count.scss';

export function CartCount() {
    const { cartCount } = useContext(CartContext);

    return (
        <div className="cart-count">
            <img
                className="cart-count__icon"
                src="./assets/shopping-cart-white.png"
                alt="cart"
            />
            <span className="cart-count__number">{cartCount}</span>
        </div>
    );
}
