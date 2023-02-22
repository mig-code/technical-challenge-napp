import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductsListPage from './products.list.page';

describe('When render Products List Page', () => {
    test('It should render the title', () => {
        render(<ProductsListPage></ProductsListPage>);
        const titleElement = screen.getByRole('heading', {
            name: /products list/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
});
