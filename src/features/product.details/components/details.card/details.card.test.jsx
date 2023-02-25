import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mobileDetailsMock } from '../../../../mocks/mobiles';
import { DetailsCard } from './details.card';
import { CartContext } from '../../../../core/context/cart.context';

describe('When render Details Card Components', () => {
    const mockContext = {
        cartCount: 0,
    };
    const mockMobileData = mobileDetailsMock;
    test('It should render mobile data', () => {
        render(
            <CartContext.Provider value={mockContext}>
                <MemoryRouter>
                    <DetailsCard mobileData={mockMobileData} />
                </MemoryRouter>
            </CartContext.Provider>
        );
        const mobileModel = screen.getByText(mockMobileData.model);
        const mobileBrand = screen.getByText(mockMobileData.brand);

        expect(mobileModel).toBeInTheDocument();
        expect(mobileBrand).toBeInTheDocument();
    });
});
