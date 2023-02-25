import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';
import { CartContext } from '../../context/cart.context';

describe('When render Header component', () => {
    const mockContext = {
        cartCount: 0,
    };
    test('It should render the title', () => {
        render(
            <CartContext.Provider value={mockContext}>
                <MemoryRouter>
                    <Header></Header>
                </MemoryRouter>
            </CartContext.Provider>
        );
        const titleElement = screen.getByRole('heading', {
            name: /Napp Mobile Shop/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
});
