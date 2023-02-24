export const getStorageList = (storeName) => {
    const result = localStorage.getItem(storeName);
    if (!result) return null;
    return JSON.parse(result);
};

export const setStorageList = (storeName, data) => {
    localStorage.setItem(storeName, JSON.stringify(data));
};
