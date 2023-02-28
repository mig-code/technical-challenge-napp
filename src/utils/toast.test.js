import { toast } from 'react-hot-toast';

import { notifySuccess, notifyError } from './toasts';

jest.mock('react-hot-toast');

describe('Given Toast Module', () => {
    describe('When notifySuccess function is called', () => {
        test('Then toast.success should be called', () => {
            notifySuccess();
            expect(toast.success).toHaveBeenCalled();
        });
    });

    describe('When notifyError function is called', () => {
        const mockStyles = {
            duration: 2500,
            style: {
                border: '1px solid #5d5d5d',
                padding: '16px',
                color: '#e56b6f',
                background: '#ffffff',
            },
            iconTheme: {
                primary: '#e56b6f',
                secondary: '#fffaee',
            },
        };
        test('Then toast.error should be called', () => {
            notifyError('Error');
            expect(toast.error).toHaveBeenCalledWith('Error', mockStyles);
        });
    });
});
