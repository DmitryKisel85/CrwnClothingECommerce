import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.scss";

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

	return (
		<div>
			<h1>I am checkout page</h1>
			<div className=''>
				{cartItems.map((cartItem) => {
					const { id, name, quantity } = cartItem;

					return (
						<div key={id}>
							<h2>{name}</h2>
							<br />
							<div>{quantity}</div>
							<div onClick={() => removeItemToCart(cartItem)}>decrement</div>
							<div onClick={() => addItemToCart(cartItem)}>increment</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkout;
