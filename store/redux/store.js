import { configureStore } from "@reduxjs/toolkit";
import favouriteReduce from "./favourites";

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReduce,
  },
});
