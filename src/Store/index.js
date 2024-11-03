import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import ordersSlice from "./Slice/OrdersSlice";
import customersSlice from "./Slice/CustomersSlice";
import usersSlice from "./Slice/UsersSlice";

const rootReducer = combineReducers({
  ordersSlice,
  customersSlice,
  usersSlice,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["ordersSlice", "usersSlice"],
  },
  rootReducer
);

export const store = configureStore({
  reducer: {
    rootReducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
