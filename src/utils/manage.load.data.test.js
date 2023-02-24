import { manageLoadDataSource } from './manage.load.data';

import { setNextCacheRefreshTime, checkIfCacheIsExpired } from './cache';
import {
    persistDataLocalStorage,
    getDataLocalStorage,
} from '../core/services/local.storage';
import * as debug from './debug';

jest.mock('./cache', () => ({
    setNextCacheRefreshTime: jest.fn(),
    checkIfCacheIsExpired: jest.fn(),
}));

jest.mock('../core/services/local.storage', () => ({
    persistDataLocalStorage: jest.fn(),
    getDataLocalStorage: jest.fn(),
}));

jest.mock('./debug');

describe('Given "manageLoadDataSource"', () => {
    const mockGetData = jest.fn();
    const mockStorageKey = 'storageKey';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Then "manageLoadDataSource" should return data from localStorage if exists and cache it is not expired', async () => {
        getDataLocalStorage.mockReturnValue('dataFromLocalStorage');
        checkIfCacheIsExpired.mockReturnValue(false);

        const result = await manageLoadDataSource(mockGetData, mockStorageKey);

        expect(result).toBe('dataFromLocalStorage');
    });
    test('Then "manageLoadDataSource" should return data from API if localStorage does not exist', async () => {
        getDataLocalStorage.mockReturnValue(null);
        checkIfCacheIsExpired.mockReturnValue(false);
        mockGetData.mockReturnValue('datafromAPI');

        const result = await manageLoadDataSource(mockGetData, mockStorageKey);
        expect(result).toBe('datafromAPI');

        expect(persistDataLocalStorage).toHaveBeenCalledWith(
            mockStorageKey,
            'datafromAPI'
        );
        expect(setNextCacheRefreshTime).toHaveBeenCalled();
    });
    test('Then "manageLoadDataSource" should return data from API if cache is expired', async () => {
        getDataLocalStorage.mockReturnValue('data');
        checkIfCacheIsExpired.mockReturnValue(true);
        mockGetData.mockReturnValue('datafromAPI');

        const result = await manageLoadDataSource(mockGetData, mockStorageKey);

        expect(result).toBe('datafromAPI');
        expect(persistDataLocalStorage).toHaveBeenCalledWith(
            mockStorageKey,
            'datafromAPI'
        );
        expect(setNextCacheRefreshTime).toHaveBeenCalled();
    });
    test('Then "manageLoadDataSource" should return error if API is not working correct', async () => {
        let spyConsole = jest.spyOn(debug, 'consoleDebug');
        getDataLocalStorage.mockReturnValue(null);
        checkIfCacheIsExpired.mockReturnValue(false);
        mockGetData.mockRejectedValue('error');

        await manageLoadDataSource(mockGetData, mockStorageKey);

        expect(spyConsole).toHaveBeenCalledWith('error');
    });
});
