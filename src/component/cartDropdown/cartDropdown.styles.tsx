import styled from "styled-components";
import { media } from "../../media.styles";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 260px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${BaseButton},
	${GoogleSignInButton},
	${InvertedButton} {
		margin-top: auto;
	}

	@media ${media.tabletS} {
		right: 17.5px;
	}

	@media ${media.mobileM} {
		width: 285px;
		height: 500px;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: auto;

	@media ${media.mobileM} {
		height: 500px;
	}
`;
