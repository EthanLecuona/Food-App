import { createSlice } from "@reduxjs/toolkit";

const favouritesSLice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouritesSLice.actions.addFavourite;
export const removeFavourite = favouritesSLice.actions.removeFavourite;
export default favouritesSLice.reducer;
