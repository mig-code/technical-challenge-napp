import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../breadcrumbs/breadcrumbs';
import { CartCount } from '../cart.count/cart.count';
import './style.scss';

export function Header() {
    return (
        <header>
            <div className="left-container">
                <Link to="/">
                    <h1 className='title'>NAPP MOBILE SHOP</h1>
                </Link>
                <BreadCrumbs></BreadCrumbs>
            </div>

            <CartCount></CartCount>
        </header>
    );
}
