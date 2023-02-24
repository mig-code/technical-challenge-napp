import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../core/services/local.storage';

const cacheStorageKey = 'lastApiCall';
const timeToRefresh = 10 * 1000; // 30sec in miliseconds

export const checkIfCacheIsExpired = () => {
    let currentTime = Date.now();

    const lastApiCall = getDataLocalStorage(cacheStorageKey);
    const cacheExpired = currentTime > lastApiCall + timeToRefresh;

    if (!lastApiCall || cacheExpired) {
        console.log('CACHE EXPIRADO');
        setNextCacheRefreshTime(currentTime);
        return true;
    }

    return false;
};

export const setNextCacheRefreshTime = (currentTime) => {
    const lastApiCall = currentTime;
    persistDataLocalStorage(cacheStorageKey, lastApiCall);
};
