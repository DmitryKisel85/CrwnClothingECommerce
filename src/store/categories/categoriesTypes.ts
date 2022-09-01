export enum CATEGORIES_ACTION_TYPES {
	FETCH_CATEGORIES_START = "categoriesReducer/fetchCategoriesStart",
}

export type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type Category = {
	title: string;
	imageUrl: string;
	items: CategoryItem[];
};

export type CategoryMap = {
	[key: string]: CategoryItem[];
};
