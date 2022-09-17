import { useContext } from 'react';

import Button from '../button/Button'
import { CartContext } from '../../contexts/CartContext';

import classes from './ProductsCard.module.scss'
const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
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