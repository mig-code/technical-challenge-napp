import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ProductsList = lazy(() =>
    import('../../../features/products.list/pages/products.list.page')
);

const ProductDetails = lazy(() =>
    import('../../../features/product.details/pages/product.details.page')
);

export function LazyRoutes() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route
                    path={''}
                    element={<ProductsList></ProductsList>}
                ></Route>

                <Route
                    path={'mobile/:id'}
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