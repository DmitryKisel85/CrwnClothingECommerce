import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";

import CheckoutItem from "../../component/CheckoutItem";
import PaymentForm from "../../component/PaymentForm";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";
import { FC } from "react";

const Checkout: FC = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}

            <Total>${cartTotal}</Total>
            <PaymentForm />
        </CheckoutContainer>
    );
};

export default Checkout;
