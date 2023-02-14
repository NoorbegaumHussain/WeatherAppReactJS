import {  createSlice } from "@reduxjs/toolkit";

export const weatherAppSlice = createSlice({
  name: "weatherdata",
  initialState: {
    value: [],
    favourite: [],
    recent: [],
    // test : 'I am test '
  },
  reducers: {
    addCity: (state, action) => {
      const val = state.value.map((value) => value.id);

      if (val.includes(action.payload.id)) {
        console.log("Already Exhist");
      } else {
        state.value.push(action.payload);
      }
    },
    deleteFav: (state, action) => {
      console.log("inside delete reducer");
      console.log(action.payload.id);
      state.value = state.value.filter((site) => site.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCity, deleteFav } = weatherAppSlice.actions;

export default weatherAppSlice.reducer;
