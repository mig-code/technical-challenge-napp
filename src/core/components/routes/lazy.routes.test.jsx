/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { LazyRoutes } from './lazy.routes';

const mockPageTitles = ['Test Products List', 'Test Products Details'];
const items = [{ path: '' }, { path: '/mobile/:model/:id' }];
const testLazyRoute = (index) => {
    const title = new RegExp(mockPageTitles[index], 'i');
    const lazyElement = screen.getByText(title);
    expect(lazyElement).toBeInTheDocument();
};

jest.mock('../../../features/products.list/pages/products.list.page', () => {
    return () => {
        return <div>{mockPageTitles[0]}</div>;
    };
});
jest.mock(
    '../../../features/product.details/pages/product.details.page',
    () => {
        return () => {
            return <div>{mockPageTitles[1]}</div>;
        };
    }
);

describe('Given AppRoutes Lazy component', () => {
    let lazyPaths = [];
    beforeEach(() => {
        lazyPaths = items.map((item) => item.path);
    });
    describe(`When we render the component 
                And the lazy route is Products List`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={0}>
                        <LazyRoutes></LazyRoutes>
                    </Router>
                );
            });
        });
        test('Then it should display the Products LIst Page', () => {
            testLazyRoute(0);
        });
    });
    describe(`When we render the component 
                And the lazy route is Products Details`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={1}>
                        <LazyRoutes></LazyRoutes>
                    </Router>
                );
            });
        });
        test('Then it should display Products Deatails Page', () => {
            testLazyRoute(1);
        });
    });
});
