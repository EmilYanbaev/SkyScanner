import { call, put} from "redux-saga/effects"
import { getDecryptionToken } from "../../decryptionToken/decryption"
import { aviaApi } from "../../Server API/avia"
import { stopSubmit } from "redux-form"
import { signSuccess } from "../reducers/authReducer"

export function* sagaAuthWorker({ data }) {
    let token = getDecryptionToken(data.pass,data.encryptedToken)
    const isSuccess = yield call(aviaApi.tryToken, token)
    if (isSuccess.error.length > 0)
       yield put(stopSubmit("login", { _error: isSuccess.error }))
    else{
        yield put(signSuccess(token))
        sessionStorage.setItem("token",token)
    }
}