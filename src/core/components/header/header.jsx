import { BreadCrumbs } from '../breadcrumbs/breadcrumbs';
import { CartCount } from '../cart.count/cart.count';
export function Header() {
    return (
        <header>
            <h1>Napp Mobile Shop</h1>
            <BreadCrumbs></BreadCrumbs>
            <CartCount></CartCount>
        </header>
    );
}
