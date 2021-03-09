import { SIGN_IN } from "./reducers/authReducer"
import { UPDATE_INPUT } from "./reducers/searchReducer"

import {takeEvery } from "redux-saga/effects"

import { sagaAuthWorker } from "./sagaWorkers/authWorker"
import { helpInputWorker } from "./sagaWorkers/helpInputWorker"

export function* sagaWatcher() {
    yield takeEvery(SIGN_IN, sagaAuthWorker)
    yield takeEvery(UPDATE_INPUT,helpInputWorker)
}


