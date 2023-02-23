export const getStorageList = (storeName) => {
    const result = localStorage.getItem(storeName);
    if (!result) return [];
    return JSON.parse(result);
};

export const setStorageList = (storeName, data) => {
    localStorage.setItem(storeName, JSON.stringify(data));
};
