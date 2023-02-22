import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter } from 'react-router-dom';

describe('Given Layout component', () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    test('renders his children', () => {
        render(
            <MemoryRouter>
                <Layout>
                    <div>children Test</div>
                </Layout>
            </MemoryRouter>
        );

        const textElement = screen.getByText(/children Test/i);
        expect(textElement).toBeInTheDocument();
    });
});
