import {
    getDataLocalStorage,
    persistDataLocalStorage,
    removeDataLocalStorage,
} from './local.storage';

const testItem = { name: 'Test' };

describe('Given storage functions', () => {
    describe('When we use getDataLocalStorage with data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest
                .fn()
                .mockReturnValue(JSON.stringify([testItem]));
        });
        test('Web API function should be call', () => {
            const result = getDataLocalStorage('test');
            expect(result).toEqual([testItem]);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use getDataLocalStorage without data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest.fn().mockReturnValue(null);
        });
        test('Web API function should be called', () => {
            const result = getDataLocalStorage('test');
            expect(result).toEqual(null);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use persistDataLocalStorage', () => {
        beforeEach(() => {
            Storage.prototype.setItem = jest.fn();
        });
        test('Web API function should be called', () => {
            persistDataLocalStorage('test', [testItem]);
            expect(Storage.prototype.setItem).toHaveBeenCalledWith(
                'test',
                JSON.stringify([testItem])
            );
        });
    });

    describe('When we use removeDataLocalStorage', () => {
        beforeEach(() => {
            Storage.prototype.clear = jest.fn();
        });
        test('Web API function should be called', () => {
            removeDataLocalStorage();
            expect(Storage.prototype.clear).toHaveBeenCalled();
        });
    });
});
