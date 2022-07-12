import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../button";
import { BUTTON_TYPES_CLASSES } from "../button/Button";

import { CategoryItem } from "../../store/categories/category.types";

import { ProductCardContainer, Footer, Name, Price } from "./productCard.styles";

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;