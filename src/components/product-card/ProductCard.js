import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart-actions'
import { selectCartItems } from '../../store/cart/cart-selector'


import Button from '../button/Button'

import classes from './ProductsCard.module.scss'
const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const distpatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => distpatch(addItemToCart(cartItems, product))
    return (
        <div className={classes['product-card-container']} >
            <img src={imageUrl} alt={`${name}`} />
            <div className={classes.footer}>
                <span className={classes.name}>{name}</span>
                <span className={classes.price}>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard;