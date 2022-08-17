import { FC } from "react";

import SignUpForm from "../../component/signUpForm";
import SignInForm from "../../component/signInForm";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication: FC = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
