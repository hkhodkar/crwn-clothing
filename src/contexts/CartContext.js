import { createContext, useEffect, useState } from "react";

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
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity * cartItem.price, 0);
        setTotal(newTotal)
    }, [cartItems])

    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems, item))
    }

    const removeItemFromCart = (item) => {
        setCartItems(removeCartItem(cartItems, item))
    }

    const clearItemFromCart = (item) => {
        setCartItems(clearItemCart(cartItems, item))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, total }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}