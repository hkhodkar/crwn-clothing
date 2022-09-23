import { Link } from 'react-router-dom';

import ProductCard from '../product-card/ProductCard';

import classes from './CategoryPreview.module.scss'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className={classes['category-preview-container']}>
            <h2>
                <Link to={title} className={classes.title}>{title.toUpperCase()}</Link>
            </h2>
            <div className={classes.preview}>
                {
                    products.filter((_, idx) => idx < 4)
                        .map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;