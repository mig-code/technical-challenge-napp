import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Item } from './item';
import { allMobilesMock } from '../../../../mocks/mobiles';

describe('When render Item Component', () => {
    const mockMobileData = allMobilesMock[0];
    test('It should render mobile data', () => {
        render(
            <MemoryRouter>
                <Item item={mockMobileData}></Item>
            </MemoryRouter>
        );
        const mobileModel = screen.getByText(mockMobileData.model);
        const mobileBrand = screen.getByText(mockMobileData.brand);

        expect(mobileModel).toBeInTheDocument();
        expect(mobileBrand).toBeInTheDocument();
    });
});
