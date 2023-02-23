/* eslint-disable testing-library/no-await-sync-query */

import { allMobilesMock, mobileDetailsMock } from '../../mocks/mobiles';
import { getProducts, getProductById } from './products.services';

describe('Given Products Service', () => {
    const mockProducts = allMobilesMock;
    const mockProductDetails = mobileDetailsMock;

    beforeEach(() => {
        // mocks de fetch
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
});
