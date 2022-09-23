import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";


const addCartItem = (cartItems, item) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...item, quantity: 1 }]

}

const removeCartItem = (cartItems, item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingCartItem.quantity === 1)
        return cartItems.filter(cartItem => cartItem.id !== item.id)

    return cartItems.map((cartitem) =>
        cartitem.id === item.id
            ? { ...cartitem, quantity: cartitem.quantity - 1 }
            : cartitem
    )

}

const clearItemCart = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id)
}



export const CartContext = createContext({
    isCartOpen: true,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0
})

const CART_REDUCER_TYPES = {
    'SET_CART_ITEM': 'SET_CART_ITEM',
    'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    total: 0
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_REDUCER_TYPES.SET_CART_ITEM:
            return {
                ...state,
                ...payload
            }
        case CART_REDUCER_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        default: return state;
    }

}



export const CartProvider = ({ children }) => {

    const [{ cartItems, isCartOpen, cartCount, total }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total = total + cartItem.quantity, 0)
        const newTotal = newCartItems.reduce((total, cartItem) => total = total + cartItem.quantity * cartItem.price, 0);
        dispatch(
            createAction(CART_REDUCER_TYPES.SET_CART_ITEM, {
                cartItems: newCartItems, total: newTotal, cartCount: newCartCount
            })
        );
    }

    const addItemToCart = (item) => {
        const newCartItems = addCartItem(cartItems, item);
        updateCartItemsReducer(newCartItems);

    }

    const removeItemFromCart = (item) => {
        const newCartItems = removeCartItem(cartItems, item)
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (item) => {
        const newCartItems = clearItemCart(cartItems, item)
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_REDUCER_TYPES.SET_IS_CART_OPEN, bool))
    }

    const value = { isCartOpen, addItemToCart, cartItems, cartCount, setIsCartOpen, removeItemFromCart, clearItemFromCart, total }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
