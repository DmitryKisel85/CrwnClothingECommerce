import styled from "styled-components";
import { media } from "../../media.styles";

export const AuthenticationContainer = styled.div`
	display: flex;
	max-width: 900px;
	justify-content: space-between;
	margin: 30px auto;
	gap: 20px;

	@media ${media.mobileL} {
		flex-direction: column;
		align-items: center;
		gap: 50px;
	}

	@media ${media.mobileS} {
	}
`;
