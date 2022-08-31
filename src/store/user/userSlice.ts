import { createSlice } from "@reduxjs/toolkit";

import { UserData } from "../../utils/firebase/firebase";

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const initialState: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

const userSlice = createSlice({
	name: "userReducer",
	initialState,
	reducers: {
		signInUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});
