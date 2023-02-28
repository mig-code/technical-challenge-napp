/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ProductsListPage from './products.list.page';
import { MemoryRouter } from 'react-router-dom';
import { manageLoadDataSource } from '../../../utils/manage.load.data';
jest.mock('../../../utils/manage.load.data', () => ({
    manageLoadDataSource: jest.fn(),
}));

jest.mock('../components/list/list', () => ({
    List: () => <div>List of products</div>,
}));

describe('When render Products List Page', () => {
    test('It should render the title', () => {
        render(
            <MemoryRouter>
                <ProductsListPage></ProductsListPage>
            </MemoryRouter>
        );
        const titleElement = screen.getByRole('heading', {
            name: /¡Encuentre el mejor móvil al mejor precio!/i,
        });
        expect(titleElement).toBeInTheDocument();
    });
    test('It should render the list', async () => {
        manageLoadDataSource.mockResolvedValue([]);
        await act(async () => {
            render(
                <MemoryRouter>
                    <ProductsListPage></ProductsListPage>
                </MemoryRouter>
            );
        });

        await waitFor(() => {
            const ListElement = screen.getByText(/List of products/i);
            expect(ListElement).toBeInTheDocument();
        });
    });
});
