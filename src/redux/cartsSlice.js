import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    cart: [],
    isLoading: false,
};

// Selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const cartSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        emptyCart: (state) => {
            state.cart = [];
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            if (index >= 0) {
                state.cart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it's not in the cart!`
                );
            }
        },
    }
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
