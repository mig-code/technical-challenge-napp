import {
    getDataLocalStorage,
    persistDataLocalStorage,
    removeDataLocalStorage,
} from '../core/services/local.storage';

const cacheStorageKey = 'lastApiCall';

const timeToRefresh = 60 * 60 * 1000; // 1 hour in milliseconds 60 * 60 * 1000;

// Use for testing
//5 sec in milliseconds 5 * 1000;

export const checkIfCacheIsExpired = () => {
    const currentTime = Date.now();

    const lastApiCall = getDataLocalStorage(cacheStorageKey);
    const cacheTimeIsExpired = currentTime > lastApiCall + timeToRefresh;

    if (!lastApiCall) return true;

    if (cacheTimeIsExpired) {
        removeDataLocalStorage();
        return true;
    }

    return false;
};

export const setNextCacheRefreshTime = () => {
    const currentTime = Date.now();

    const lastApiCall = currentTime;

    persistDataLocalStorage(cacheStorageKey, lastApiCall);
};
