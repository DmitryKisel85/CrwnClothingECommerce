import { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cartSelector";
// import { setIsCartOpen } from "../../store/cart/cart.action";
import { setIsCartOpen } from "../../store/cart/cartSlice";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon: FC = () => {
	const dispatch = useAppDispatch();

	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
