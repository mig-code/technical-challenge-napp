import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { allMobilesMock } from '../../../../mocks/mobiles';
import { List } from './list';

describe('When render List Component', () => {
    test('When render with products', () => {
        const mockProducts = allMobilesMock;
        render(
            <MemoryRouter>
                <List products={mockProducts} />
            </MemoryRouter>
        );
        const mobileModel = screen.getByText(mockProducts[0].model);
        expect(mobileModel).toBeInTheDocument();

        const totalItems = screen.getAllByRole('article').length;
        expect(totalItems).toBe(mockProducts.length);
    });
    test('When render without products', () => {
        const mockProducts = [];
        render(
            <MemoryRouter>
                <List products={mockProducts} />
            </MemoryRouter>
        );
        const noProductsElement = screen.getByText(
            /No hay productos que coincidan con la búsqueda/i
        );
        expect(noProductsElement).toBeInTheDocument();
    });
});
