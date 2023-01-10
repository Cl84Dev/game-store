import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: []
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const procuctIsAlreadyInCart = state.product.some(product => product.id === action.payload.id)

            if (procuctIsAlreadyInCart) {
                state.product = state.product.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)
            } else {
                state.product = [...state.product, {...action.payload, quantity: 1}]
            }
        },

        decreaseProductQuantity: (state, action) => {
            if (action.payload.quantity > 1) {
                state.product = state.product.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity - 1} : product)
            }
        },

        removeProduct: (state, action) => {
            state.product = state.product.filter(product => product.id !== action.payload.id)
        }
    }
})

export default cartSlicer.reducer

export const { addProduct, decreaseProductQuantity, removeProduct } = cartSlicer.actions