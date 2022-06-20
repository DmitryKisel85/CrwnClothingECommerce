import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

import SignUpForm from "../../component/signUpForm";
import SignInForm from "../../component/signInForm";

const Authentication = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
