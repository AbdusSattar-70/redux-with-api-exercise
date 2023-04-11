import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:[],
  isLoading:true,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    extraReducer:{},
  },
});

export const { extraReducer } = userSlice.actions;
export default userSlice.reducer;