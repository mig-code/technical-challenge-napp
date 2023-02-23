import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailsPage from './product.details.page';
import { MemoryRouter } from 'react-router-dom';

describe('When render Product Details Page', () => {
    test('It should render the title', () => {
        render(
            <MemoryRouter>
                <ProductDetailsPage></ProductDetailsPage>
            </MemoryRouter>
        );
        const titleElement = screen.getByRole('heading', {
            name: /product details page/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
});
