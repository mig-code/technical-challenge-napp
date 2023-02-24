export const consoleDebug = (...info) => {
    // En el browser (process not defined)
    // o en Node en desarrollo (NODE_ENV === 'development')
    // se muestran los mensajes de consola

    try {
        if (!process.env) throw info;
        if (process.env.NODE_ENV === 'development') {
            console.log(...info);
        }
    } catch (error) {
        console.log(...info);
    }
};
