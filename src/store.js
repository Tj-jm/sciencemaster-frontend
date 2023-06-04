import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/reducerSlices/authSlice";
import uiReducer from './slices/reducerSlices/uiSlice'
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui:uiReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
