import { render } from '@testing-library/react';
import { CartContextProvider } from './cart.provider';
import * as useCart from '../hooks/use.cart';

describe('Given  CartContext Provider', () => {
    describe('When we use it', () => {
        test('Then it should call the custom hook useCart', () => {
            const spyUseCart = jest.spyOn(useCart, 'useCart');
            render(
                <CartContextProvider>
                    <div>Test</div>
                </CartContextProvider>
            );
            expect(spyUseCart).toHaveBeenCalled();
        });
    });
});
