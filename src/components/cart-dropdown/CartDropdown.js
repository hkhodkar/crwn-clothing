import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import Button from '../button/Button'
import classes from './CartDropdown.module.scss'
import CartItem from '../cart-item/CartItem'

const CardDropdown = props => {

    const { cartItems, cartCount } = useContext(CartContext);

    return (
        <div className={classes['cart-dropdown-container']}>
            <div className={classes['cart-items']}>
                {cartCount === 0 ? <span className={classes['empty-message']}>No item exist in cart</span> : cartItems.map(item => <CartItem key={item.id} CartItem={item} />)}
            </div>
            <Button >GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropdown