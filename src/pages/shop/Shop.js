import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categories-preview/CategoriesPreview';

const Shop = props => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
        </Routes>
    )
}

export default Shop;