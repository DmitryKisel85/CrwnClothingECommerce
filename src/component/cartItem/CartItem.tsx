import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import { CartItemContainer, ItemDetails } from "./cartItem.styles";

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span>{name}</span>
				<span>
					{quantity} x ${price}{" "}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
