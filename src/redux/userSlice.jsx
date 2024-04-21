import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: []
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState, // Corrected spelling of initialState
    reducers: {
        setUserAuth: (state, action) => {
            console.log(state, action);
            state.auth = action.payload;
        }
    }
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;