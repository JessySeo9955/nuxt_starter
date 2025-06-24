export default defineEventHandler(async event => {
    return {
        success: true,
        products: [
            { id: 1, name: 'Product 1', price: 29.99 },
            { id: 2, name: 'Product 2', price: 49.99 },
        ],
    };
});
