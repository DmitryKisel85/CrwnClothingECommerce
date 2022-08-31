import { CategoryItem } from "../categories/categoriesTypes";

export enum CART_ACTION_TYPES {
	SET_CART_ITEMS = "cart/SET_CART_ITEMS",
	SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
	SET_CART_COUNT = "cart/SET_CART_COUNT",
	SET_CART_TOTA = "cart/SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
	quantity: number;
};
