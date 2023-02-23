import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductsListPage from './products.list.page';
import { MemoryRouter } from 'react-router-dom';

describe('When render Products List Page', () => {
    test('It should render the title', () => {
        render(
            <MemoryRouter>
                <ProductsListPage></ProductsListPage>
            </MemoryRouter>
        );
        const titleElement = screen.getByRole('heading', {
            name: /products list/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
});
