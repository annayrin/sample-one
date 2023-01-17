import {DELETE_NOTIFICATION, GENERATE_NOTIFICATION, OPEN_MENU, SELECT_LANGUAGE} from "./action-type";


export const toggleOpenMenu = (status) => {

    return {
        type: OPEN_MENU,
        payload: status
    }
}

export const generateNotification = notification => {

    return {
        type: GENERATE_NOTIFICATION,
        payload: {...notification}
    }
}


export const deleteNotification = index => {
    return {
        type: DELETE_NOTIFICATION,
        payload: index
    }
}

export const selectLanguage = language => {
    return {
        type: SELECT_LANGUAGE,
        payload: language
    }
}
