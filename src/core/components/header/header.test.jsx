import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

describe('When render Header component', () => {
    test('It should render the title', () => {
        render(
            <MemoryRouter>
                <Header></Header>
            </MemoryRouter>
        );
        const titleElement = screen.getByRole('heading', { name: /header/i });
        expect(titleElement).toBeInTheDocument();
    });
});
