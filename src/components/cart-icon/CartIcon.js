import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import clasess from './CartIcon.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'



const CartIcon = props => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className={clasess['cart-icon-container']} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={clasess['shopping-icon']} />
            <span className={clasess['item-count']}>{cartCount}</span>
        </div>
    )
}

export default CartIcon