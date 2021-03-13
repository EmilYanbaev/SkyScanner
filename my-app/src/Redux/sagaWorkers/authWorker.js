import { call, put } from "redux-saga/effects"
import { getDecryptionToken } from "../../decryptionToken/decryption"
import { aviaApi } from "../../Server API/avia"
import { stopSubmit } from "redux-form"
import { signSuccess} from "../reducers/authReducer"
import { togglePreloaderLoginPage } from "../reducers/preloaderReducer"

export function* sagaAuthWorker({ data }) {
    debugger;
    yield put(togglePreloaderLoginPage())
    let token = getDecryptionToken(data.pass, data.encryptedToken)
    const isSuccess = yield call(aviaApi.tryToken, token)
    if (isSuccess.error.length > 0) {
        let message = "Неверный логин или пароль\n" + isSuccess.error
        yield put(togglePreloaderLoginPage())
        yield put(stopSubmit("login", { _error: message }))
    }
    else {
        yield put(signSuccess(token))
        sessionStorage.setItem("token", token)
        yield put(togglePreloaderLoginPage())
    }
}