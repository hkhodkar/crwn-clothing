import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart-reducer";
import { userReducer } from "../store/user/user-reducer";
import { categoriesReducer } from "./categories/category-reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer
})
