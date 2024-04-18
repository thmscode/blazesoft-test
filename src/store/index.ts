import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import bookReducer from "./slices/bookSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      books: bookReducer,
    },
  });
};

// Inter the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
