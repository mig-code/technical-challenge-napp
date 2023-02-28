export const filterByModelAndBrand = (products, query) => {
    const filteredProducts = products.filter((product) => {
        return (
            product.model.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase())
        );
    });
    return filteredProducts;
};
