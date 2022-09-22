import { Fragment, useContext } from 'react';
import classes from './Shop.module.scss'
import { CategoriesContext } from '../../contexts/CategorisContext';
import ProductCard from '../../components/product-card/ProductCard';
const Shop = props => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className={classes['product-container']}>
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;