import styled from "styled-components";
import { media } from "../../media.styles";

import { SpinnerContainer } from "../Spinner/spinner.styles";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    font-weight: bold;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    @media ${media.tabletM} {
        &:hover {
            background-color: black;
            color: white;
        }
    }

    @media ${media.mobileM} {
        min-width: 125px;
        padding: 0 15px;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }

    @media ${media.tabletM} {
        &:hover {
            background-color: #4285f4;
            color: white;
        }
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }

    @media ${media.tabletM} {
        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`;
//
