import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

jest.mock('../breadcrumbs/breadcrumbs', () => ({
    BreadCrumbs: () => <div>BreadCrumbs</div>,
}));

jest.mock('../cart.count/cart.count', () => ({
    CartCount: () => <div>CartCount</div>,
}));

describe('When render Header component', () => {
    test('It should render its Title, breadcrumbs and CartCount', () => {
        render(
            <MemoryRouter>
                <Header></Header>
            </MemoryRouter>
        );
        const titleElement = screen.getByRole('heading', {
            name: /Napp Mobile Shop/i,
        });
        expect(titleElement).toBeInTheDocument();

        const breadCrumbsElement = screen.getByText('BreadCrumbs');
        expect(breadCrumbsElement).toBeInTheDocument();

        const cartCountElement = screen.getByText('CartCount');
        expect(cartCountElement).toBeInTheDocument();
    });
});
