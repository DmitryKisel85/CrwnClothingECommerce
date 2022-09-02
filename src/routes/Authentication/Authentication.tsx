import { FC } from "react";

import SignUpForm from "../../component/SignUpForm";
import SignInForm from "../../component/SignInForm";

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
