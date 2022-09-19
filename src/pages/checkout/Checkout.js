import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

import classes from './Checkout.module.scss'


const Checkout = props => {

    const { cartItems, total } = useContext(CartContext)

    return (
        <div className={classes['checkout-container']}>
            <div className={classes['checkout-header']}>
                <div className={classes['header-block']}>
                    <span>Product</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Description</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Quantity</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Price</span>
                </div>
                <div className={classes['header-block']}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <span className={classes.total}>Total: {total}</span>
        </div>
    )
}

export default Checkout