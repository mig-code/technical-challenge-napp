import toast from 'react-hot-toast';

export const notifySuccess = (success) =>
    toast.success(success, {
        duration: 2000,
        style: {
            border: '1px solid #5d5d5d',
            padding: '16px',
            color: '#58B09C',
            background: '#ffffff',
        },
        iconTheme: {
            primary: '#58B09C',
            secondary: '#fffaee',
        },
    });
export const notifyError = (error) =>
    toast.error(error, {
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
    });
