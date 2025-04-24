import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    MenuToggle: false
};

export const MenuTogglepop = createSlice({
    name: "menuToggle",
    initialState,
    reducers: {
        setChangeToggle: (state) => {
            state.MenuToggle = !state.MenuToggle;
        }
    }
});


export const { setChangeToggle } = MenuTogglepop.actions;
export default MenuTogglepop.reducer;
export const selectMenuToggle = (state) => state.MenuTogglepop.MenuToggle;
