import { setNextCacheRefreshTime, checkIfCacheIsExpired } from './cache';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
    removeDataLocalStorage,
} from '../core/services/local.storage';

jest.mock('../core/services/local.storage', () => ({
    getDataLocalStorage: jest.fn(),
    persistDataLocalStorage: jest.fn(),
    removeDataLocalStorage: jest.fn(),
}));

describe('Given "checkIfCacheIsExpired" function', () => {
    test('Then "checkIfCacheIsExpired" should return true if there is no lastApiCall', () => {
        getDataLocalStorage.mockReturnValue(null);
        const result = checkIfCacheIsExpired();
        expect(result).toBe(true);
    });

    test('Then "checkIfCacheIsExpired" should return true if the cache time is expired', () => {
        getDataLocalStorage.mockReturnValue(100000);

        const result = checkIfCacheIsExpired();
        expect(result).toBe(true);

        expect(removeDataLocalStorage).toHaveBeenCalled();
    });
    test('Then "checkIfCacheIsExpired" should return false if the cache is not expired', () => {
        jest.spyOn(Date, 'now').mockImplementation(() => 100000);
        getDataLocalStorage.mockReturnValue(100);
        const result = checkIfCacheIsExpired();
        expect(result).toBe(false);
    });
});

describe('Given "setNextCacheRefreshTime" function', () => {
    test('Then "setNextCacheRefreshTime" should update the localStorage', () => {
        const currentTime = Date.now();
        setNextCacheRefreshTime();
        expect(persistDataLocalStorage).toHaveBeenCalledWith(
            'lastApiCall',
            currentTime
        );
    });
});
