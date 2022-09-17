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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems, item))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}