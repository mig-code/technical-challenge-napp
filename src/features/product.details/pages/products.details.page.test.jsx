/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ProductDetailsPage from './product.details.page';
import { MemoryRouter } from 'react-router-dom';
import { manageLoadDataSource } from '../../../utils/manage.load.data';

jest.mock('../../../utils/manage.load.data', () => ({
    manageLoadDataSource: jest.fn(),
}));

jest.mock('../../../core/components/loading/loading', () => ({
    Loading: () => <div data-testid="spinner">Loading...</div>,
}));
jest.mock('../components/details.card/details.card', () => ({
    DetailsCard: () => <div>Details Card</div>,
}));

describe('When render Product Details Page', () => {
    test('Without products It should render the spinner', async () => {
        render(
            <MemoryRouter>
                <ProductDetailsPage></ProductDetailsPage>
            </MemoryRouter>
        );

        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('With products It should render the details card', async () => {
        manageLoadDataSource.mockResolvedValue({
            id: '1',
        });
        await act(async () => {
            render(
                <MemoryRouter>
                    <ProductDetailsPage></ProductDetailsPage>
                </MemoryRouter>
            );
        });

        await waitFor(() => {
            const detailsCardElement = screen.getByText(/details card/i);
            expect(detailsCardElement).toBeInTheDocument();
        });
    });
});
