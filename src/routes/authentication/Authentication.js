import SignUpForm from "../../component/signUpForm";
import SignInForm from "../../component/signInForm";

import "./authentication.scss";

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
