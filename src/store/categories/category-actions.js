import { createAction } from '../../utils/reducer/reducer.utils'
import { CATEGORIES_ACTION_TYPE } from '../categories/category-types'

export const setCategoriesMapAction = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap)