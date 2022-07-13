import styled from "styled-components";
import { media } from "../../media.styles";

export const DirectoryContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media ${media.mobileM} {
		display: grid;
		grid-template-columns: 1fr;
	}
`;
