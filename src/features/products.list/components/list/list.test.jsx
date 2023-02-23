import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { allMobilesMock } from '../../../../mocks/mobiles';
import { List } from './list';

describe('When render List Component', () => {
    const mockProducts = allMobilesMock;
    test('It should render a list of products', () => {
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
});
