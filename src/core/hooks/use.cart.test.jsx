import React, { useContext } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as debug from '../../utils/debug';
import { useCart } from './use.cart';
import { CartContext } from '../context/cart.context';
import { addProductToCart } from '../services/products.services';

import { checkIfCacheIsExpired } from '../../utils/cache';

import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../services/local.storage';

jest.mock('../../utils/cache', () => ({
    checkIfCacheIsExpired: jest.fn(),
}));

jest.mock('../services/local.storage', () => ({
    getDataLocalStorage: jest.fn(),
    persistDataLocalStorage: jest.fn(),
}));
jest.mock('../services/products.services', () => ({
    addProductToCart: jest.fn(),
}));
jest.mock('../../utils/debug');

describe('Given userCart custom hook', () => {
    let TestComponent = () => {
        const { resetCartCount, getCartCount, handleAddToCart } = useCart();
        const { cartCount } = useContext(CartContext);

        return (
            <>
                <button onClick={resetCartCount}>Reset Cart</button>
                <button onClick={getCartCount}>Get Cart Count</button>
                <button onClick={handleAddToCart}>Add To Cart</button>

                <div data-testid="cart-count">{cartCount}</div>
            </>
        );
    };
    test('should render', () => {
        render(
            <CartContext.Provider value={{ cartCount: 0 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        expect(screen.getByText('Reset Cart')).toBeInTheDocument();
        expect(screen.getByText('Get Cart Count')).toBeInTheDocument();
        expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    });

    test('should reset cart count', () => {
        render(
            <CartContext.Provider value={{ cartCount: 0 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        const button = screen.getByText('Reset Cart');

        userEvent.click(button);

        expect(persistDataLocalStorage).toHaveBeenCalledWith('cartCount', 0);
    });

    test('should get cart count', () => {
        checkIfCacheIsExpired.mockReturnValue(false);
        getDataLocalStorage.mockReturnValue(5);
        render(
            <CartContext.Provider value={{ cartCount: 5 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        const button = screen.getByText('Get Cart Count');
        userEvent.click(button);

        expect(getDataLocalStorage).toHaveBeenCalledWith('cartCount');

        expect(screen.getByTestId('cart-count')).toHaveTextContent('5');
    });
    test('should get cart count if cache is expired', () => {
        checkIfCacheIsExpired.mockReturnValue(true);
        getDataLocalStorage.mockReturnValue(10);
        render(
            <CartContext.Provider value={{ cartCount: 0 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        const button = screen.getByText('Get Cart Count');
        userEvent.click(button);

        expect(getDataLocalStorage).toHaveBeenCalledWith('cartCount');
        expect(persistDataLocalStorage).toHaveBeenCalledWith('cartCount', 0);

        expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    });

    test('should add to cart if service AddToProduct is working Ok', async () => {
        checkIfCacheIsExpired.mockReturnValue(false);
        getDataLocalStorage.mockReturnValue(5);
        addProductToCart.mockResolvedValue({
            count: 1,
        });

        render(
            <CartContext.Provider value={{ cartCount: 5 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        const button = screen.getByText('Add To Cart');
        userEvent.click(button);

        expect(addProductToCart).toHaveBeenCalled();

        await waitFor(() => {
            expect(persistDataLocalStorage).toHaveBeenCalledWith(
                'cartCount',
                6
            );
        });
    });

    test('should add to cart if service AddToProduct is not working Ok', async () => {
        let spyConsole = jest.spyOn(debug, 'consoleDebug');
        addProductToCart.mockRejectedValue('Error adding product to cart');

        render(
            <CartContext.Provider value={{ cartCount: 5 }}>
                <TestComponent />
            </CartContext.Provider>
        );
        const button = screen.getByText('Add To Cart');
        userEvent.click(button);

        expect(addProductToCart).toHaveBeenCalled();

        await waitFor(() => {
            expect(spyConsole).toHaveBeenCalledWith(
                'Error adding product to cart'
            );
        });
    });
});
