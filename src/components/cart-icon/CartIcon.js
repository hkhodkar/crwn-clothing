import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart-actions';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart-selector';

import clasess from './CartIcon.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'



const CartIcon = props => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <div className={clasess['cart-icon-container']} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={clasess['shopping-icon']} />
            <span className={clasess['item-count']}>{cartCount}</span>
        </div>
    )
}

export default CartIcon