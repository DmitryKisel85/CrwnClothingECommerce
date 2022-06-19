import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match!");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			}

			console.log("user creation encountered an error", error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	return (
		<div className=''>
			<h1>Sign Up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Display Name</label>
				<input type='text' required onChange={handleChange} name='displayName' value={displayName} />

				<label htmlFor=''>Email</label>
				<input type='email' required onChange={handleChange} name='email' value={email} />

				<label htmlFor=''>Password</label>
				<input type='password' required onChange={handleChange} name='password' value={password} />

				<label htmlFor=''>Confirm Password</label>
				<input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
