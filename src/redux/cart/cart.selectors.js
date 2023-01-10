export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.product.reduce((acc, curr) => acc + curr.quantity, 0)
}

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.product.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
}