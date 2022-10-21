import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categoriesSlice";

import { fetchCategoriesStart } from "./categoriesSlice";
import { Category } from "./categoriesTypes";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray: Category[] = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error as Error));
    }
}

export function* categoriesSaga() {
    yield all([takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync)]);
}
