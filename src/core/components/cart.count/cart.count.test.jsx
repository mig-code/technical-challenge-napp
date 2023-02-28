import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartCount } from './cart.count';
import { CartContext } from '../../context/cart.context';

describe('When render CartCount component', () => {
    const mockContext = {
        cartCount: 2,
    };
    test('It should render the count', () => {
        render(
            <CartContext.Provider value={mockContext}>
                <MemoryRouter>
                    <CartCount></CartCount>
                </MemoryRouter>
            </CartContext.Provider>
        );

        const cartCountElement = screen.getByText('2');
        expect(cartCountElement).toBeInTheDocument();
    });
});
