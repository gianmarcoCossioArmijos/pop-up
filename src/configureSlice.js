import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice.js";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});
