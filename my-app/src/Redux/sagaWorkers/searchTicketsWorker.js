import { call, put } from "@redux-saga/core/effects";
import { aviaApi } from "../../Server API/avia";
import { dataMonth } from "../../utils/dataMonth";
import { togglePreloaderTickets } from "../reducers/preloaderReducer";

import { setCurrentPage, setDataDeparture, setTickets, toggleTicketsSucces } from "../reducers/ticketsReducer";

export function* searchTicketsWorker({ data, token }) {
    debugger;

    yield put(togglePreloaderTickets())
    yield put(toggleTicketsSucces(false))

    const origin = yield call(aviaApi.getIataCode, data.origin.name)
    const destination = yield call(aviaApi.getIataCode, data.destination.name)

    let monthName = dataMonth(data.month.number)

    yield put(setDataDeparture({ origin: { name: origin.name, iata: origin.code }, destination: { name: destination.name, iata: destination.code }, month: monthName }))

    if (data.month.number < 10)
        data.month.number = "0" + data.month.number

    const tickets = yield call(aviaApi.getTickets, origin.code, destination.code, data.month.number, token, data.page)

    yield put(setTickets(tickets.data))
    yield put(setCurrentPage(data.page))
    yield put(togglePreloaderTickets())
    yield put(toggleTicketsSucces(true))
    
}