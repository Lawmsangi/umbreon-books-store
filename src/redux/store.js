import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartsSlice';
import addressReducer from './addressSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer
    }
});

export default store;
