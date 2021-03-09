import { call, put } from "@redux-saga/core/effects";
import { aviaApi } from "../../Server API/avia";
import { clearInputHelp, setHelpInpuit } from "../reducers/searchReducer";

export function* autoComplitWorker({ value, id }) {
    if (value) {
        const autoComplitData = yield call(aviaApi.getAutoComplit, value);
        yield put(setHelpInpuit(autoComplitData, id))
    } else yield put(clearInputHelp(id))
}