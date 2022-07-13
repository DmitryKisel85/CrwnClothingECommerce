import styled from "styled-components";
import { media } from "../../media.styles";

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	h2 {
		margin: 10px 0;
	}

	@media ${media.mobileM} {
		width: 300px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
