import { configureStore } from "@reduxjs/toolkit";
import posts from './post/postSlice';

export const store = configureStore({
  reducer: {
    posts
  },
});