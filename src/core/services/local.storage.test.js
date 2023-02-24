import { getStorageList, setStorageList } from './local.storage';

const testItem = { name: 'Test' };

describe('Given storage functions', () => {
    describe('When we use getStorage with data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest
                .fn()
                .mockReturnValue(JSON.stringify([testItem]));
        });
        test('Web API function should be call', () => {
            const result = getStorageList('test');
            expect(result).toEqual([testItem]);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use getStorageList without data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest.fn().mockReturnValue(null);
        });
        test('Web API function should be called', () => {
            const result = getStorageList('test');
            expect(result).toEqual(null);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use setStorageList', () => {
        beforeEach(() => {
            Storage.prototype.setItem = jest.fn();
        });
        test('Web API function should be called', () => {
            setStorageList('test', [testItem]);
            expect(Storage.prototype.setItem).toHaveBeenCalledWith(
                'test',
                JSON.stringify([testItem])
            );
        });
    });
});
