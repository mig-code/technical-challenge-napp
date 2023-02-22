import { Layout } from '../layout/layout';
import { LazyRoutes } from '../routes/lazy.routes';
import './App.css';

export function App() {
    return (
        <div className="App">
            <Layout>
                <LazyRoutes></LazyRoutes>
            </Layout>
        </div>
    );
}
