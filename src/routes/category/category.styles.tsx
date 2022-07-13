import styled from "styled-components";

import { media } from "../../media.styles";

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;

	@media ${media.tabletS} {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 30px;
	}

	@media ${media.mobileS} {
		grid-template-columns: 1fr;
	}
`;

export const CategoryTitle = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`;
