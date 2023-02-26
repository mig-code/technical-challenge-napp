import toast from 'react-hot-toast';

export const notifySuccess = () =>
    toast.success('El producto se ha añadido al carrito', {
        duration: 2000,
        style: {
            border: '1px solid #464d77',
            padding: '16px',
            color: '#464d77',
        },
        iconTheme: {
            primary: '#464d77',
            secondary: '#fffaee',
        },
    });
export const notifyError = (error) =>
    toast.error(error, {
        duration: 2500,
        style: {
            border: '1px solid #ec5431',
            padding: '16px',
            color: '#ec5431',
        },
        iconTheme: {
            primary: '#ec5431',
            secondary: '#fffaee',
        },
    });
