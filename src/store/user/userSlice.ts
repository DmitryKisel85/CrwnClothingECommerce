import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserData } from "../../utils/firebase/firebase";

import { AdditionalDetailsType, EmailSignInType, SignUpSuccessPayload } from "./userTypes";

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
        signInSuccess: (state, action: PayloadAction<UserData & { id: string }>) => {
            state.currentUser = action.payload;
        },
        signInFailed: (state, action: PayloadAction<Error>) => {
            state.error = action.payload;
        },
        signUpFailed: (state, action: PayloadAction<Error>) => {
            state.error = action.payload;
        },
        signOutSuccess: (state) => {
            state.currentUser = null;
        },
        signOutFailed: (state, action: PayloadAction<Error>) => {
            state.error = action.payload;
        },
        googleSignInStart: (state) => {},
        emailSignInStart: (state, action: PayloadAction<EmailSignInType>) => {},
        checkUserSession: (state) => {},
        signUpStart: (state, action: PayloadAction<AdditionalDetailsType>) => {},
        signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {},
        signOutStart: (state) => {},
    },
});

const { actions, reducer } = userSlice;

export const {
    signInSuccess,
    signInFailed,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    googleSignInStart,
    emailSignInStart,
    checkUserSession,
    signUpStart,
    signUpSuccess,
    signOutStart,
} = actions;

export default reducer;
