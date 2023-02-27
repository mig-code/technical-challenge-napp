import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '../loading/loading';

const ProductsList = lazy(() =>
    import('../../../features/products.list/pages/products.list.page')
);

const ProductDetails = lazy(() =>
    import('../../../features/product.details/pages/product.details.page')
);

export function LazyRoutes() {
    return (
        <Suspense fallback={<Loading></Loading>}>
            <Routes>
                <Route
                    path={''}
                    element={<ProductsList></ProductsList>}
                ></Route>

                <Route
                    path={'mobile/:model/:id'}
                    element={<ProductDetails></ProductDetails>}
                ></Route>

                <Route
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
