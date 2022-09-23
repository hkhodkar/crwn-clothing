import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'


import Category from '../category/Category';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import { setCategoriesMapAction } from '../../store/categories/category-actions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


const Shop = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        async function getCategoriesMap() {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMapAction(categoryMap))
        }
        getCategoriesMap();
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;