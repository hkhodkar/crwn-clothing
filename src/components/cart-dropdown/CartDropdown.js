import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCartItems, selectCartCount } from '../../store/cart/cart-selector'

import Button from '../button/Button'
import classes from './CartDropdown.module.scss'
import CartItem from '../cart-item/CartItem'

const CardDropdown = props => {

    const cartItems = useSelector(selectCartItems);
    const cartCount = useSelector(selectCartCount)
    const navigate = useNavigate();
    const goToChecoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className={classes['cart-dropdown-container']}>
            <div className={classes['cart-items']}>
                {cartCount === 0 ? <span className={classes['empty-message']}>No item exist in cart</span> : cartItems.map(item => <CartItem key={item.id} CartItem={item} />)}
            </div>
            <Button onClick={goToChecoutHandler} >GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropdown