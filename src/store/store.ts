import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./AuthSlice/loginSlice";
import SignSlice from "./AuthSlice/SignupSlice";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    SignSlice: SignSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
