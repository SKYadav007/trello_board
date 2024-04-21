import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  logoutmodal: false
}

const LogoutReducer = createSlice({
  name: "logout",
  initialState: initialState,
  reducers: {
    setUserLogout: (state, action) => {
      console.log(state, action);
      state.isLogout = action.payload;
    }
  }

})
export const { setUserLogout } = LogoutReducer.actions;
export default LogoutReducer.reducer;