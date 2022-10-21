import { CategoryItem } from "../categories/categoriesTypes";

export type CartItem = CategoryItem & {
    quantity: number;
};
