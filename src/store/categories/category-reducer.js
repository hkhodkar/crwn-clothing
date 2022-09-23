import { CATEGORIES_ACTION_TYPES } from './category-action-types'

const CATEGORIES_INITIAL_STATES = {
    categories: []
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATES, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }

}