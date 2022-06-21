import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button from "../button";
import CartItem from "../cartItem";

import "./cartDropdown.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
