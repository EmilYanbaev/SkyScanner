import { call, put } from "@redux-saga/core/effects";
import { aviaApi } from "../../Server API/avia";
import { setIataCode } from "../reducers/searchReducer";
import { setTickets } from "../reducers/ticketsReducer";

export function* searchWorker({data,token}) {
    const iataCode = yield call(aviaApi.getIataCode,data.origin,data.destination)
    yield put(setIataCode(iataCode.origin.iata,iataCode.destination.iata))

    if(data.month<10)
        data.month = "0" + data.month

    const tickets = yield call(aviaApi.getTickets,iataCode.origin.iata,iataCode.destination.iata,data.month,token)
    yield put(setTickets(tickets.data))
}