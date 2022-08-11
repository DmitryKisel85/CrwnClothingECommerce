import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./rootSaga";

import { rootReducer } from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistedConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistedConfig = {
	key: "root",
	storage: storage,
	whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
