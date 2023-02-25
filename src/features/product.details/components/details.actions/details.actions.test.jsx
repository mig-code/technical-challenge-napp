/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mobileDetailsMock } from '../../../../mocks/mobiles';

import { CartContext } from '../../../../core/context/cart.context';
import { DetailsActions } from './details.actions';
import userEvent from '../../../../../node_modules/@testing-library/user-event/dist/index';
import { checkIfCacheIsExpired } from '../../../../utils/cache';

import { notifyError, notifySuccess } from '../../../../utils/toasts';
jest.mock('../../../../utils/toasts', () => ({
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

jest.mock('../../../../utils/cache', () => ({
    checkIfCacheIsExpired: jest.fn(),
    setNextCacheRefreshTime: jest.fn(),
}));

describe('When render Details Actions Component', () => {
    const mockHandleAddToCart = jest.fn();
    const mockResetCartCount = jest.fn();
    const mockContext = {
        cartCount: 0,
        handleAddToCart: mockHandleAddToCart,
        resetCartCount: mockResetCartCount,
    };
    const mockMobileData = mobileDetailsMock;

    describe('then it should render the data and form elements', () => {
        beforeEach(() => {
            jest.clearAllMocks();

            render(
                <CartContext.Provider value={mockContext}>
                    <MemoryRouter>
                        <DetailsActions mobileData={mockMobileData} />
                    </MemoryRouter>
                </CartContext.Provider>
            );
        });
        test('It should render mobile data', () => {
            const mobileColor = screen.getByText(
                mockMobileData.options.colors[0].name
            );
            const mobileStorage = screen.getByText(
                mockMobileData.options.storages[0].name
            );

            expect(mobileColor).toBeInTheDocument();
            expect(mobileStorage).toBeInTheDocument();
        });
        test('then color and storage can be selected', () => {
            const colorSelect = screen.getByTestId('color-select');
            const storageSelect = screen.getByTestId('storage-select');

            expect(colorSelect).toBeInTheDocument();
            expect(storageSelect).toBeInTheDocument();

            expect(colorSelect.value).toBe(
                mockMobileData.options.colors[0].code.toString()
            );
            expect(storageSelect.value).toBe(
                mockMobileData.options.storages[0].code.toString()
            );

            userEvent.selectOptions(colorSelect, [
                mockMobileData.options.colors[1].code.toString(),
            ]);
            userEvent.selectOptions(storageSelect, [
                mockMobileData.options.storages[1].code.toString(),
            ]);

            expect(colorSelect.value).toBe(
                mockMobileData.options.colors[1].code.toString()
            );
            expect(storageSelect.value).toBe(
                mockMobileData.options.storages[1].code.toString()
            );
        });
    });
    describe('then it should call handleAddToCart when submit form', () => {
        test('then if cache is expired it should call resetCartCount', async () => {
            checkIfCacheIsExpired.mockReturnValue(true);

            render(
                <CartContext.Provider value={mockContext}>
                    <MemoryRouter>
                        <DetailsActions mobileData={mockMobileData} />
                    </MemoryRouter>
                </CartContext.Provider>
            );

            const submitButton = screen.getByRole('button', {
                name: /añadir al carrito/i,
            });
            userEvent.click(submitButton);

            expect(mockResetCartCount).toHaveBeenCalled();
            expect(notifyError).toHaveBeenCalled();
        });

        test('if cache is not expired it should call handleAddToCart with valid response', async () => {
            checkIfCacheIsExpired.mockReturnValue(false);
            mockHandleAddToCart.mockResolvedValue({
                count: 1,
            });

            render(
                <CartContext.Provider value={mockContext}>
                    <MemoryRouter>
                        <DetailsActions mobileData={mockMobileData} />
                    </MemoryRouter>
                </CartContext.Provider>
            );

            const submitButton = screen.getByRole('button', {
                name: /añadir al carrito/i,
            });
            userEvent.click(submitButton);

            expect(mockHandleAddToCart).toHaveBeenCalled();

            await waitFor(() => {
                expect(notifySuccess).toHaveBeenCalled();
            });
        });
        test('if cache is not expired it should call handleAddToCart with invalid response', async () => {
            checkIfCacheIsExpired.mockReturnValue(false);

            mockHandleAddToCart.mockResolvedValue(null);

            render(
                <CartContext.Provider value={mockContext}>
                    <MemoryRouter>
                        <DetailsActions mobileData={mockMobileData} />
                    </MemoryRouter>
                </CartContext.Provider>
            );

            const submitButton = screen.getByRole('button', {
                name: /añadir al carrito/i,
            });
            userEvent.click(submitButton);

            expect(mockHandleAddToCart).toHaveBeenCalled();

            await waitFor(() => {
                expect(notifyError).toHaveBeenCalled();
            });
        });
    });
});
