import {SET_ACTIVE_CUISINE, SET_ACTIVE_ICON} from "./saga-types";
import {put, takeLatest} from "@redux-saga/core/effects";
import {SELECT_CUISINE, SELECT_FILTER_ICON} from "./action-type";

// using saga just in case I'll need to request filtered data
export function* setActiveCuisine({payload}) {

    yield put({
        type: SET_ACTIVE_CUISINE,
        payload
    })
}

export function* setFilterIcon({payload}) {

    yield put({
        type: SET_ACTIVE_ICON,
        payload
    })
}


export function* homePageWatcher() {
    yield takeLatest(SELECT_CUISINE, setActiveCuisine)
    yield takeLatest(SELECT_FILTER_ICON, setFilterIcon)
}