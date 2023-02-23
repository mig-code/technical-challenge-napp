const url = process.env.REACT_APP_API_URL;
const invalidIdError = new Error('Invalid ID');

export const getProducts = async () => {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Error ${resp.status}: ${resp.statusText}`);

    const result = await resp.json();
    return result;
};

export const getProductById = async (id) => {
    if (!id) return Promise.reject(invalidIdError);
    const resp = await fetch(`${url}${id}`);
    if (!resp.ok) throw new Error(`Error ${resp.status}: ${resp.statusText}`);

    const result = await resp.json();
    return result;
};
