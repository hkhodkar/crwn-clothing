import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import classes from './CheckoutItem.module.scss'
const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const clearCartHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <div className={classes['checkout-item-container']}>
            <div className={classes['image-container']}>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className={classes.name}>{name}</span>
            <span className={classes.quantity} >
                <div className={classes.arrow} onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className={classes.value}>{quantity}</span>
                <div className={classes.arrow} onClick={addItemHandler} >
                    &#10095;
                </div>
            </span>
            <span className={classes.price}>{price}</span>
            <div onClick={clearCartHandler} className={classes['remove-button']}>&#10005;</div>
        </div>

    )
}

export default CheckoutItem;