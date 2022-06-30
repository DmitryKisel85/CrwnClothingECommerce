import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categoriesPreview";
import Category from "../category";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/category.action";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		};

		getCategoriesMap();
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
