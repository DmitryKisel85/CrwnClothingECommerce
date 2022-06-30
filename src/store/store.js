// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// import { rootReducer } from "./rootReducer";

// export const store = createStore(
// 	rootReducer,
// 	/* preloadedState, */ devToolsEnhancer()
// 	// Specify name here, actionsDenylist, actionsCreators and other options if needed
// );

import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
