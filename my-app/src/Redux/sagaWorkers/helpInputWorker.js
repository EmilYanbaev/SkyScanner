import { call, put } from "@redux-saga/core/effects";
import { aviaApi } from "../../Server API/avia";
import { setHelpInpuit } from "../reducers/searchReducer";

export function* helpInputWorker({value,id}) {
    if(value){
    const helpInputData = yield call(aviaApi.getAutoComplit,value);
    yield put(setHelpInpuit(helpInputData,id))
    }
}