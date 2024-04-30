import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLogout: false
};

const LogoutReducer = createSlice({
  name: "logout",
  initialState,
  reducers: {
      setUserLogout: (state, action) => {
          state.isLogout = action.payload;
      }
  }
});
export const { setUserLogout } = LogoutReducer.actions;
export default LogoutReducer.reducer;