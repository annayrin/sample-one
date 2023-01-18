import {GET_ALL_RESTAURANTS, SELECT_CUISINE, SELECT_FILTER_ICON, SET_SEARCH_VALUE} from "./action-type";

export const getAllRestaurants = () => {

    return {
        type:GET_ALL_RESTAURANTS
    }
}

export const selectCuisine = cuisine => {

    return {
        type: SELECT_CUISINE,
        payload: cuisine
    }
}

export const selectIcon = item => {

    return {
        type: SELECT_FILTER_ICON,
        payload: item
    }
}

export const handleSearchValue = value => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}