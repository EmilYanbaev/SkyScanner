import { call, put } from "@redux-saga/core/effects";
import { aviaApi } from "../../Server API/avia";
import { dataMonth } from "../../utils/dataMonth";

import { setDataDeparture, setTickets, toggleTicketsSucces } from "../reducers/ticketsReducer";

export function* searchWorker({ data, token }) {
    yield put(toggleTicketsSucces(false))

    const origin = yield call(aviaApi.getIataCode, data.origin)
    const destination = yield call(aviaApi.getIataCode, data.destination)

    let monthName = dataMonth(data.month)

    yield put(setDataDeparture({ origin: { name: origin.name, iata: origin.code }, destination: { name: destination.name, iata: destination.code }, month: monthName }))

    if (data.month < 10)
        data.month = "0" + data.month

    const tickets = yield call(aviaApi.getTickets, origin.code, destination.code, data.month, token)

    yield put(setTickets(tickets.data))
    yield put(toggleTicketsSucces(true))
}