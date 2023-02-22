import { Header } from '../header/header';

export function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header></Header>
            <section className="layout-children">{children}</section>
        </div>
    );
}
