export const filterByModelAndBrand = (products, query) => {
    let filteredProducts = products;

    filteredProducts = products.filter((product) => {
        return (
            product.model.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase())
        );
    });
    return filteredProducts;
};
