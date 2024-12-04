import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id == action.payload.id);
            console.log(findProduct);
            if (findProduct) {
                findProduct.quantitiy++;
            } else {
                const productClone = { ...action.payload, quantitiy: 1 };
                state.push(productClone);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => {
                return product.id !== action.payload.id;
            })
        },
        cartClear: () => {
            return [];
        }
    }
})
export const { addToCart, removeFromCart, cartClear } = cartSlice.actions;
export default cartSlice.reducer