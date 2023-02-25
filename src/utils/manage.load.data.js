import { setNextCacheRefreshTime, checkIfCacheIsExpired } from './cache';
import { consoleDebug } from './debug';
import {
    persistDataLocalStorage,
    getDataLocalStorage,
} from '../core/services/local.storage';

export const manageLoadDataSource = async (getData, storageKey) => {
    const localStorageData = getDataLocalStorage(storageKey);
    const isCacheTimeExpired = checkIfCacheIsExpired();

    if (localStorageData && !isCacheTimeExpired) {
        return localStorageData;
    }
    if (!localStorageData || isCacheTimeExpired) {
        try {
            const apiData = await getData();
            persistDataLocalStorage(storageKey, apiData);
            setNextCacheRefreshTime();

            return apiData;
        } catch (error) {
            handleError(error);
        }
    }
};

const handleError = (error) => {
    consoleDebug(error);
};
