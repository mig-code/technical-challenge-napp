import { Header } from '../header/header';
import { Toaster } from 'react-hot-toast';

export function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header></Header>
            <section className="layout-children">{children}</section>
            <Toaster />
        </div>
    );
}
