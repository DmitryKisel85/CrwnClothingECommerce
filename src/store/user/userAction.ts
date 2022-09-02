import { createAction } from "@reduxjs/toolkit";

import { User } from "firebase/auth";

import { USER_ACTION_TYPES } from "./userTypes";
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase";

export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};

export type Action<T> = {
	type: T;
};

// TYPES
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SING_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SING_IN_START, { email: string; password: string }>;
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string; password: string; displayName: string }>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User; additionalDetails: AdditionalInformation }>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

//
export const setCurrentUser = createAction<SetCurrentUser>(USER_ACTION_TYPES.SET_CURRENT_USER);
export const checkUserSession = createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = createAction(USER_ACTION_TYPES.GOOGLE_SING_IN_START);
export const emailSignInStart = createAction(USER_ACTION_TYPES.EMAIL_SING_IN_START, function prepare(email: string, password: string) {
	return {
		payload: {
			email,
			password,
		},
	};
});
export const signUpStart = createAction(USER_ACTION_TYPES.SIGN_UP_START, function prepare(email: string, password: string, displayName: string) {
	return {
		payload: {
			email,
			password,
			displayName,
		},
	};
});
export const signUpSuccess = createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, function prepare(user: User, additionalDetails: AdditionalInformation) {
	return {
		payload: {
			user,
			additionalDetails,
		},
	};
});
export const signOutStart = createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSuccess = createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
