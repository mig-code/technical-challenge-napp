import {
    getDataLocalStorage,
    persistDataLocalStorage,
    removeDataLocalStorage,
} from '../core/services/local.storage';

const cacheStorageKey = 'lastApiCall';
const timeToRefresh = 5 * 60 * 1000; // 5min in milliseconds for testing purposes

export const checkIfCacheIsExpired = () => {
    const currentTime = Date.now();

    const lastApiCall = getDataLocalStorage(cacheStorageKey);
    const cacheExpired = currentTime > lastApiCall + timeToRefresh;

    if (!lastApiCall || cacheExpired) {
        if (cacheExpired) removeDataLocalStorage();
        return true;
    }

    return false;
};

export const setNextCacheRefreshTime = (currentTime) => {
    const lastApiCall = currentTime;

    persistDataLocalStorage(cacheStorageKey, lastApiCall);
};
