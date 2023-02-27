import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { BreadCrumbs } from './breadcrumbs';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
}));
describe('When render BreadCrumbs component', () => {
    test('Whith at / route', () => {
        useLocation.mockReturnValueOnce({
            pathname: '/',
        });
        render(
            <MemoryRouter>
                <BreadCrumbs></BreadCrumbs>
            </MemoryRouter>
        );
        const linkToMobiles = screen.getByRole('link', {
            name: /Móviles/i,
        });
        expect(linkToMobiles).toBeInTheDocument();
    });

    test('Whith at /mobile route', () => {
        useLocation.mockReturnValueOnce({
            pathname: '/mobile/Liquid-Z6-Plus/cGjFJlmqNPIwU59AOcY8H/',
        });
        render(
            <MemoryRouter>
                <BreadCrumbs></BreadCrumbs>
            </MemoryRouter>
        );
        const linkTocurrentMobile = screen.getByRole('link', {
            name: /Liquid-Z6-Plus/i,
        });
        expect(linkTocurrentMobile).toBeInTheDocument();
    });
    test('Whith at /mockRoute route', () => {
        useLocation.mockReturnValueOnce({
            pathname: '/mockRoute',
        });
        render(
            <MemoryRouter>
                <BreadCrumbs></BreadCrumbs>
            </MemoryRouter>
        );
        const linkToMobiles = screen.getByRole('link', {
            name: /mockRoute/i,
        });
        expect(linkToMobiles).toBeInTheDocument();
    });
});
