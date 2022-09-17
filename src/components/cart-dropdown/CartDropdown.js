import Button from '../button/Button'
import classes from './CartDropdown.module.scss'


const CardDropdown = props => {
    return (
        <div className={classes['cart-dropdown-container']}>
            <div className={classes['cart-items']}>
            </div>
            <Button >GO TO CHECKOUT</Button>
        </div>
    )
}

export default CardDropdown