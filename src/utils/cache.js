import {
    getDataLocalStorage,
    persistDataLocalStorage,
    removeDataLocalStorage,
} from '../core/services/local.storage';

const cacheStorageKey = 'lastApiCall';
// 10 sec in milliseconds for testing purposes
const timeToRefresh = 10 * 1000;

// 1 hour in milliseconds60 * 60 * 1000;

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

export const setNextCacheRefreshTime = (currentTime) => {
    const lastApiCall = currentTime;

    persistDataLocalStorage(cacheStorageKey, lastApiCall);
};
