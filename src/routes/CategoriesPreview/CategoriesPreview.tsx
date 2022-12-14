import { FC } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/categoriesSelector";

import CategoryPreview from "../../component/CategoryPreview";
import Spinner from "../../component/Spinner";

const CategoriesPreview: FC = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})
			)}
		</>
	);
};

export default CategoriesPreview;
