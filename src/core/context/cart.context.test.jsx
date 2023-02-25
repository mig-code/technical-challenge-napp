import { render, screen } from '@testing-library/react';
import { useContext } from 'react';

// Se importa directamente el initialContext
// para que el test utilice las funciones definidas en él
import { CartContext } from './cart.context';

const mockContext = {
    cartCount: 0,
};

describe('Given the context CartContext', () => {
    let TestComponent;
    describe('When a Test Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const { cartCount } = useContext(CartContext);

                return <>{cartCount}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <CartContext.Provider value={mockContext}>
                    <TestComponent></TestComponent>
                </CartContext.Provider>
            );
            expect(screen.getByText('0')).toBeInTheDocument();
        });
    });
});
