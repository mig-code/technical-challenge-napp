import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailsPage from './product.details.page';

describe('When render Product Details Page', () => {
    test('It should render the title', () => {
        render(<ProductDetailsPage></ProductDetailsPage>);
        const titleElement = screen.getByRole('heading', {
            name: /product details page/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
});
