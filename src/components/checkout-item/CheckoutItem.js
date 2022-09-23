import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart-selector'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart-actions'


import classes from './CheckoutItem.module.scss'
const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dipatch = useDispatch();

    const cartItems = useSelector(selectCartItems)
    const clearCartHandler = () => dipatch(clearItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dipatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dipatch(removeItemFromCart(cartItems, cartItem))

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