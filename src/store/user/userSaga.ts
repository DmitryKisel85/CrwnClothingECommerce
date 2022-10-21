import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import { SignInWithEmailPayloadACtionType, SignUpPayloadActionType, SignUpSuccessPayloadActionType } from "./userTypes";

// import { EmailSignInStart } from "./userAction";
import {
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
} from "./userSlice";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser,
    AdditionalInformation,
} from "../../utils/firebase/firebase";

import { User } from "firebase/auth";

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);

        if (userSnapshot) {
            yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithEmail({ payload: { email, password } }: SignInWithEmailPayloadACtionType) {
    try {
        const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);

        if (userCredential) {
            const { user } = userCredential;
            yield* call(getSnapshotFromUserAuth, user);
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signUp({ additionalInformation }: SignUpPayloadActionType) {
    const { email, password } = additionalInformation;

    try {
        const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);

        if (userCredential) {
            const { user } = userCredential;

            yield* put(signUpSuccess({ user, additionalInformation }));
        }
    } catch (error) {
        yield* put(signUpFailed(error as Error));
    }
}

export function* signOut() {
    try {
        yield* call(signOutUser);
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(signOutFailed(error as Error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (!userAuth) return;
        yield* call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInAfterSignUp({
    additionalData: { user, additionalInformation },
}: SignUpSuccessPayloadActionType) {
    yield* call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* userSagas() {
    yield all([
        takeLatest(checkUserSession.type, isUserAuthenticated),
        takeLatest(googleSignInStart.type, signInWithGoogle),
        takeLatest(emailSignInStart.type, signInWithEmail),
        takeLatest(signUpStart.type, signUp),
        takeLatest(signUpSuccess.type, signInAfterSignUp),
        takeLatest(signOutStart.type, signOut),
    ]);
}
