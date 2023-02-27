import { allMobilesMock, filterMobilesMock } from '../mocks/mobiles';
import { filterByModelAndBrand } from './search.filters';

describe('Given "filterByModelAndBrand" function', () => {
    test('Then "filterByModelAndBrand" should return the products filtered by model and brand', () => {
        const products = allMobilesMock;
        const query = 'Liquid Z6 Plus';
        const filteredProducts = filterMobilesMock;
        const result = filterByModelAndBrand(products, query);
        expect(result).toEqual(filteredProducts);
    });
});
