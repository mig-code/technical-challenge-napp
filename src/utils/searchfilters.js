export const filterByModelAndBrand = (products, query) => {
    let filteredProducts = products;

    filteredProducts = products.filter((product) => {
        const searchQueryWithoutSpaces = query.replace(/\s/g, '');
        return (
            product.model
                .toLowerCase()
                .includes(searchQueryWithoutSpaces.toLowerCase()) ||
            product.brand
                .toLowerCase()
                .includes(searchQueryWithoutSpaces.toLowerCase())
        );
    });
    return filteredProducts;
};
