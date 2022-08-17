import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

import CategoriesPreview from "../categoriesPreview";
import Category from "../category";

import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesStart());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
