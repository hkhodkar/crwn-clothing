import { useContext } from 'react';
import classes from './Shop.module.scss'
import { ProducstContext } from '../../contexts/ProductsContext';
import ProductCard from '../../components/product-card/ProductCard';
const Shop = props => {
    const { products } = useContext(ProducstContext)
    return (
        <div className={classes['product-container']}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;