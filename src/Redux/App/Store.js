import { configureStore } from '@reduxjs/toolkit';
import MenuTogglepop from '../Slice/Menu_toggle';
import SigninTogglepop from '../Slice/Login_toggle';
export const store = configureStore({
    reducer: {
        MenuTogglepop,
        SigninTogglepop
    },
});
