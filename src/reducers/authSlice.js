import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTypeId: null,
  token: "",
  loggedInUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedinUser: (state, action) => {
      state.loggedInUser = action.payload;
      console.log("setLoggedinUser called with payload:", action.payload);
    },
    setToken: (state, action) => {
      console.log("setToken called with payload:", action.payload);
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedinUser, setToken } = authSlice.actions;

export default authSlice.reducer;
