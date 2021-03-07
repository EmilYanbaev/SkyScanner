import { SIGN_IN } from "./reducers/authReducer"

import {takeEvery } from "redux-saga/effects"

import { sagaAuthWorker } from "./sagaWorkers/authWorker"

export function* sagaWatcher() {
    yield takeEvery(SIGN_IN, sagaAuthWorker)
}


