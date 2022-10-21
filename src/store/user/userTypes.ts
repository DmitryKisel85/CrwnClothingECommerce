import { User } from "firebase/auth";

export type AdditionalDetailsType = { email: string; password: string; displayName: string };
export type SignUpSuccessPayload = { user: User; additionalInformation: AdditionalDetailsType };

export type SignUpPayloadActionType = {
    type: string;
    additionalInformation: AdditionalDetailsType;
};

export type SignUpSuccessPayloadActionType = {
    type: string;
    additionalData: {
        user: User;
        additionalInformation: AdditionalDetailsType;
    };
};

export type SignInWithEmailPayloadACtionType = {
    type: string;
    payload: {
        email: string;
        password: string;
    };
};

export type EmailSignInType = { email: string; password: string };
