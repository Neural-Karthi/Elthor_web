import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    SigninToggle: false
};

export const SigninTogglepop = createSlice({
    name: "SigninToggle",
    initialState,
    reducers: {
        setChangeSigninToggle: (state) => {
            state.SigninToggle = !state.SigninToggle;
        }
    }
});


export const { setChangeSigninToggle } = SigninTogglepop.actions;
export default SigninTogglepop.reducer;
export const selectsignToggle = (state) => state.SigninTogglepop.SigninToggle;
