import { combineReducers, configureStore } from "@reduxjs/toolkit";

import basketReducer from "../slices/basketSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  basket: basketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
