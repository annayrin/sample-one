import {fork} from "@redux-saga/core/effects";
import {layoutWatcher} from "./layout/sagas";
import {homePageWatcher} from "./home/sagas";

export default function * combineSaga() {
    yield fork(layoutWatcher)
    yield fork(homePageWatcher)
}