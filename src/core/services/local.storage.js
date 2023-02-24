export const getDataLocalStorage = (storeName) => {
    const result = localStorage.getItem(storeName);
    if (!result) return null;
    return JSON.parse(result);
};

export const persistDataLocalStorage = (storeName, data) => {
    localStorage.setItem(storeName, JSON.stringify(data));
};

export const removeDataLocalStorage = () => {
    localStorage.clear();
};
