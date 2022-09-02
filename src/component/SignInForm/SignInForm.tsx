import { useState, FormEvent, ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../store/store";

import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../FormInput";
import Button from "../Button";
import { BUTTON_TYPES_CLASSES } from "../Button/Button";

import { googleSignInStart, emailSignInStart } from "../../store/user/userAction";

import { SignInContainer, ButtonsContainer } from "./signInForm.styles";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm: FC = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const dispatch = useAppDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert("incorrect password for this email");
					break;
				case AuthErrorCodes.NULL_USER:
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={(e) => handleSubmit(e)}>
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button type='button' buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
