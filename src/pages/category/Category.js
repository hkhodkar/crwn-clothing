import { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';

import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category-selectores'


import classes from './Category.module.scss'

const Category = props => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className={classes.title}>{category}</h2>
            <div className={classes['category-container']}>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
}

export default Category;