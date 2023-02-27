import { Header } from '../header/header';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../footer/footer';

export function Layout({ children }) {
    return (
        <div className="layout-container">
            <Toaster />
            <Header></Header>
            <section className="layout-children">{children}</section>
            <Footer></Footer>
        </div>
    );
}
