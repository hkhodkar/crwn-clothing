import { Routes, Route } from 'react-router-dom'

import Category from '../category/Category';
import CategoriesPreview from '../categories-preview/CategoriesPreview';

const Shop = props => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;