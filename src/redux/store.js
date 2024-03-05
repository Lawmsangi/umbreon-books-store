import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
