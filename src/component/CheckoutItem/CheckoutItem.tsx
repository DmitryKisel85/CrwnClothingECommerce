import { FC, memo } from "react";

import { useAppDispatch } from "../../store/store";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cartSlice";

import { CartItem as TCartItem } from "../../store/cart/cartTypes";

import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from "./checkoutItem.styles";

type CheckoutItemProps = {
	cartItem: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useAppDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>${price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
});

export default CheckoutItem;
