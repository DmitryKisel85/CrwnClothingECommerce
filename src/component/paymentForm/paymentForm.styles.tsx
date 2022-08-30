import styled from "styled-components";
import { media } from "../../media.styles";
import Button from "../Button";

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		margin-bottom: 20px;
	}

	@media ${media.mobileM} {
		height: 150px;
	}
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;

	@media ${media.mobileL} {
		min-width: 400px;
	}

	@media ${media.mobileM} {
		min-width: 350px;
	}

	@media ${media.mobileS} {
		min-width: 300px;
	}
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
