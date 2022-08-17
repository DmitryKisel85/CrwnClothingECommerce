import { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../component/productCard";
import Spinner from "../../component/spinner";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import { CategoryContainer, CategoryTitle } from "./category.styles";

type CategoryRouteParams = {
	category: string;
};

const Category: FC = () => {
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? <Spinner /> : <CategoryContainer>{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</CategoryContainer>}
		</>
	);
};

export default Category;
