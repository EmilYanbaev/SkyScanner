import { createSelector } from "reselect"

let getOrigin = state => state.search.originInput
let getOriginIata = state => state.search.originIata
let getDestination = state => state.search.destinationInput
let getDestinationIata = state => state.search.destinationIata
let getTicketsData = state => state.tickets.data

export const getDepartureData = createSelector(getOrigin, getOriginIata, getDestination, getDestinationIata, getTicketsData, (originName, originIata, destinationName, destinationIata, tickets) => {
    if (tickets.length === 0)
        return null
    else return { origin: { name: originName, iata: originIata }, destination: { name: destinationName, iata: destinationIata } }
})