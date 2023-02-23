import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DetailsCards } from './details.card';
import { mobileDetailsMock } from '../../../../mocks/mobiles';

describe('When render Details Card Components', () => {
    const mockMobileData = mobileDetailsMock;
    test('It should render mobile data', () => {
        render(
            <MemoryRouter>
                <DetailsCards mobileData={mockMobileData} />
            </MemoryRouter>
        );
        const mobileModel = screen.getByText(mockMobileData.model);
        const mobileBrand = screen.getByText(mockMobileData.brand);

        expect(mobileModel).toBeInTheDocument();
        expect(mobileBrand).toBeInTheDocument();
    });
});
