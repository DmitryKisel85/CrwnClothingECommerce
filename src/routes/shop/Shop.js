import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview";
import Category from "../category";

import "./shop.scss";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
