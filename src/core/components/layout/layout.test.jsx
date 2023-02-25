import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../header/header', () => ({
    Header: () => <div>Mock Header</div>,
}));

describe('Given Layout component', () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    test('renders the header and his children', () => {
        render(
            <MemoryRouter>
                <Layout>
                    <div>children Test</div>
                </Layout>
            </MemoryRouter>
        );

        const headerElement = screen.getByText(/Mock Header/i);
        expect(headerElement).toBeInTheDocument();

        const textElement = screen.getByText(/children Test/i);
        expect(textElement).toBeInTheDocument();
    });
});
