import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "./cartTypes";
import { CategoryItem } from "../categories/categoriesTypes";

export type CartState = {
	readonly cartItems: CartItem[];
	readonly isCartOpen: boolean;
};

export const initialState: CartState = {
	cartItems: [],
	isCartOpen: false,
};

const cartSlice = createSlice({
	name: "cartReducer",
	initialState,
	reducers: {
		setIsCartOpen: (state, action: PayloadAction<boolean>) => {
			state.isCartOpen = action.payload;
		},

		addItemToCart: (state, action: PayloadAction<CartItem | CategoryItem>) => {
			const existingCartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
			if (existingCartItem) {
				state.cartItems.map((cartItem) => (cartItem.id === action.payload.id ? (cartItem.quantity = cartItem.quantity + 1) : cartItem));
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 });
			}
		},
		removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
			const existingCartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
			if (existingCartItem && existingCartItem.quantity === 1) {
				state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
			} else {
				state.cartItems.map((cartItem) => (cartItem.id === action.payload.id ? (cartItem.quantity = cartItem.quantity - 1) : cartItem));
			}
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
		},
	},
});

const { actions, reducer } = cartSlice;

export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = actions;

export default reducer;
