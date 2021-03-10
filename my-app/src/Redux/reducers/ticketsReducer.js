export const SET_TICKETS = "tickets/SET_TICKET"
export const SET_DATA_DEPARTURE = "tickets/SET_DATA_DEPARTURE"
export const TOGGLE_TICKETS_SUCCESS = "tickets/TOGGLE_TICKETS_SUCCESS"
export const SET_LIKE_TICKET = "tickets/SET_LIKE_TICKET"
const initialState = {
    data: [],
    dataDeparture: null,
    basketCount: 0,
    ticketsLike: [],
    setTicketsSuccess: false,
}

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return { ...state, data: action.tickets}
        case SET_DATA_DEPARTURE:
            return { ...state, dataDeparture: action.data }
        case TOGGLE_TICKETS_SUCCESS:
            return { ...state, setTicketsSuccess: action.toggle }
        case SET_LIKE_TICKET:
            if (action.isLike) {
                return { ...state, ticketsLike: [...state.ticketsLike, action.ticket], basketCount: ++state.basketCount }
            }
            else
                return { ...state, basketCount: --state.basketCount }
        default:
            return state;
    }
}
export default ticketsReducer;

export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets })
export const setDataDeparture = (data) => ({ type: SET_DATA_DEPARTURE, data })
export const toggleTicketsSucces = (toggle) => ({ type: TOGGLE_TICKETS_SUCCESS, toggle })

export const setLike = (ticket, isLike) => ({ type: SET_LIKE_TICKET, ticket, isLike })

