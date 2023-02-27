import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

jest.mock('../layout/layout', () => ({
    Layout: () => <div>Mock Layout</div>,
}));

test('when renders App , renders the Layout', () => {
    render(
        <MemoryRouter>
            <App></App>
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Mock Layout/i);
    expect(linkElement).toBeInTheDocument();
});
