import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    cart: [],
    isLoading: false,
};

const loadCartFromStorage = () => {
    const existingCartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    return existingCartFromStorage;
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart",JSON.stringify(cart))
}

// Selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.ourPrice + amount, 0);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        ...initialState,
        cart: loadCartFromStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            saveCartToLocalStorage(state.cart)
        },
        emptyCart: (state) => {
            state.cart = [];
            saveCartToLocalStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.cart.length) {
                state.cart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product at index ${index} as it's out of range!`
                );
            }
            saveCartToLocalStorage(state.cart);
        },
        addBookQuantity: (state, action) => {
            const { book, amount } = action.payload;
            const currentQuantity = state.cart.filter(item => item.title === book.title && item.author === book.author).length;
            if (currentQuantity < amount) {
                // Add more copies of the book if needed
                for (let i = 1; i < amount - currentQuantity; i++) {
                    state.cart.push(book);
                }
            } else if (currentQuantity > amount) {
                // Remove excess copies of the book
                state.cart = state.cart.filter(item => item.id !== book.id || item.title === book.title && item.author === book.author && --currentQuantity >= amount);
            }
        
            saveCartToLocalStorage(state.cart);
        }


    }
});

export const { addToCart, emptyCart, removeFromCart, addBookQuantity } = cartSlice.actions;

export default cartSlice.reducer;
