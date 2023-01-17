import {delay, put, select, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {DELETE_NOTIFICATION, GENERATE_NOTIFICATION, SELECT_LANGUAGE} from "./action-type";
import {selectLayoutLanguages, selectLayoutNotification} from "./selections";
import {SET_ACTIVE_LANGUAGE, SET_DELETED_NOTIFICATIONS, SET_GENERATED_NOTIFICATIONS} from "./saga-types";

export function* setGeneratedNotification(payload) {
    yield delay(300)
    const notification = [...yield select(selectLayoutNotification)]
    notification.push(payload)
    yield put({type: SET_GENERATED_NOTIFICATIONS, payload: notification})
}

export function* deleteShowedNotification({payload}) {
    yield delay(300)
    const notification = [...yield select(selectLayoutNotification)]
    notification.splice(payload,1)
    yield put({type: SET_GENERATED_NOTIFICATIONS, payload: notification})
}

export function* setActiveLanguage ({payload}) {
    const languages = [...yield select(selectLayoutLanguages)]
    const inactiveLanguages = languages.filter(item => item.content !== payload.content)
    yield put({
        type:SET_ACTIVE_LANGUAGE,
        payload:{
            activeLanguage:payload,
            inactiveLanguages
        }
    })
}

export function* layoutWatcher() {
    yield takeEvery(GENERATE_NOTIFICATION, setGeneratedNotification)
    yield takeLatest(DELETE_NOTIFICATION, deleteShowedNotification)
    yield takeLatest(SELECT_LANGUAGE, setActiveLanguage)
}