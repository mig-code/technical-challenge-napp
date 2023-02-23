/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import { SearchBox } from './search.box';

describe('When render SearchBox Component', () => {
    test('It should render a serch input', () => {
        render(<SearchBox></SearchBox>);
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
    });

    test('it can be typed in', () => {
        render(<SearchBox></SearchBox>);
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();

        act(() => {
            userEvent.type(searchInput, 'Acer');
        });

        expect(searchInput.value).toBe('Acer');
    });
});
