import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button";
import CartItem from "../cartItem";

import { CartDropdownContainer, CartItems } from "./cartDropdown.styles";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
