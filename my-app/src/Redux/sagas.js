import {call, put, takeEvery} from "redux-saga/effects"
import { SIGN_IN } from "./reducers/authReducer"
import {getDecryptionToken} from "../decryptionToken/decryption"
import { aviaApi } from "../Server API/avia"
export function* sagaWatcher(){
    yield takeEvery(SIGN_IN,sagaAuthWorker)
}

function* sagaAuthWorker({data}){
    let token = getDecryptionToken(data.pass)
    debugger;
    const success = yield call(aviaApi.tryProxy)
    console.log(success);
}
