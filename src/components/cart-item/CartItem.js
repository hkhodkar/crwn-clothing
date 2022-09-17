import classes from './CartItem.module.scss'

const CartItem = ({ CartItem }) => {
    const { name, imageUrl, quantity, price } = CartItem
    return (
        <div className={classes['cart-item-container']}>
            <img src={imageUrl} alt={`${name}`} />
            <div className={classes['item-details']}>
                <span className={classes.name}>{name}</span>
                <span className={classes.price}>{quantity} × ${price} </span>
            </div>
        </div>
    )
}
export default CartItem