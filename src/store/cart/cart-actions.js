import { CART_ACTIONS_REDUCER_TYPES } from './cart-action-type'
import { createAction } from '../../utils/reducer/reducer.utils'

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTIONS_REDUCER_TYPES.SET_IS_CART_OPEN, boolean);


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


export const addItemToCart = (cartItems, item) => {
    const newCartItems = addCartItem(cartItems, item);
    return createAction(CART_ACTIONS_REDUCER_TYPES.SET_CART_ITEM, newCartItems)

}

export const removeItemFromCart = (cartItems, item) => {
    const newCartItems = removeCartItem(cartItems, item)
    return createAction(CART_ACTIONS_REDUCER_TYPES.SET_CART_ITEM, newCartItems)
}

export const clearItemFromCart = (cartItems, item) => {
    const newCartItems = clearItemCart(cartItems, item)
    return createAction(CART_ACTIONS_REDUCER_TYPES.SET_CART_ITEM, newCartItems)
}
