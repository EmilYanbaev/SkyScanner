import { SIGN_IN } from "./reducers/authReducer"
import { UPDATE_INPUT } from "./reducers/searchReducer"
import { BEGINING_SEARCH } from "./reducers/common/commonAction"

import {takeEvery } from "redux-saga/effects"

import { sagaAuthWorker } from "./sagaWorkers/authWorker"
import { autoComplitWorker } from "./sagaWorkers/autoComplitWorker"
import { searchTicketsWorker} from "./sagaWorkers/searchTicketsWorker"


export function* sagaWatcher() {
    yield takeEvery(SIGN_IN, sagaAuthWorker)
    yield takeEvery(UPDATE_INPUT,autoComplitWorker)
    yield takeEvery(BEGINING_SEARCH,searchTicketsWorker)
}


