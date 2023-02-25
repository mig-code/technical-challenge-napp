/* eslint-disable testing-library/no-await-sync-query */

import { allMobilesMock, mobileDetailsMock } from '../../mocks/mobiles';
import {
    getProducts,
    getProductById,
    addProductToCart,
} from './products.services';

describe('Given Products Service', () => {
    const mockProducts = allMobilesMock;
    const mockProductDetails = mobileDetailsMock;

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockProducts),
        });
    });

    describe('When we use getProducts', () => {
        test('Then we received the products', async () => {
            const products = await getProducts();
            expect(global.fetch).toHaveBeenCalled();
            expect(products).toEqual(mockProducts);
        });
        test('Then if there are NO DATA, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await getProducts();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use getProductById', () => {
        test(`Then if the ID are VALID, we received the product
            with that ID`, async () => {
            const id = mockProductDetails.id;
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProductDetails),
            });

            const data = await getProductById(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockProductDetails);
        });

        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await getProductById('wrongId');
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await getProductById();
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
    });

    describe('When we use addProductToCart', () => {
        test('If the payload is valid, we received a count 1', async () => {
            const mockResponse = { count: 1 };
            const validPayload = {
                id: '1',
                colorCode: 1,
                storageCode: 2,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockResponse),
            });
            const data = await addProductToCart(validPayload);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockResponse);
        });
        test('If there is no payload with received a rejected Promise', async () => {
            await expect(async () => {
                await addProductToCart();
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });

        test('If the data is not valid, we received a rejected Promise', async () => {
            const wrongPayload = {
                wrongKey: 'wrongValue',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await addProductToCart(wrongPayload);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
