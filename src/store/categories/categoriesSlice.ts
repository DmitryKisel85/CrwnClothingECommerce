import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Category } from "./categoriesTypes";

export type CategoriesState = {
	readonly categories: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

const categoriesSlice = createSlice({
	name: "categoriesReducer",
	initialState,
	reducers: {
		fetchCategoriesStart: (state) => {
			state.isLoading = true;
		},
		fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
			state.isLoading = false;
			state.categories = action.payload;
		},
		fetchCategoriesFailed: (state, action: PayloadAction<Error>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

const { actions, reducer } = categoriesSlice;

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } = actions;

export default reducer;
