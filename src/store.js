import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./reducers/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Add the reducers you want to persist
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  // middleware: [
  //   // ...getDefaultMiddleware({
  //   //   serializableCheck: {
  //   //     // Ignore these action types
  //   //     ignoredActions: ["persist/PERSIST", "persist/PURGE"],
  //   //   },
  //   // }),
  // ],
});

const persistor = persistStore(store);

export { persistor, store };
