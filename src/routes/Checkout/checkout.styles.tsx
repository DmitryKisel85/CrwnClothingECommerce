import styled from "styled-components";
import { media } from "../../media.styles";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media ${media.tabletS} {
        width: 85%;
    }

    @media ${media.mobileM} {
        width: 95%;
        font-size: 14px;
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    span {
        text-align: center;
    }

    &:last-child {
        width: 8%;
    }

    @media ${media.mobileL} {
        width: 27%;

        &:last-child {
            width: 12%;
        }
    }
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;
