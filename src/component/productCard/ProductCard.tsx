import { FC } from "react";

import { useAppDispatch } from "../../store/store";

import { addItemToCart } from "../../store/cart/cartSlice";

import Button from "../Button";
import { BUTTON_TYPES_CLASSES } from "../Button/Button";

import { CategoryItem } from "../../store/categories/category.types";

import { ProductCardContainer, Footer, Name, Price } from "./productCard.styles";

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;

	const dispatch = useAppDispatch();

	const addProductToCart = () => dispatch(addItemToCart(product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
