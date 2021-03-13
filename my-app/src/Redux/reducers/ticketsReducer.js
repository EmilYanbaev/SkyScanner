import { deepEqual } from "../../utils/deepEqual"

export const SET_TICKETS = "tickets/SET_TICKET"
export const SET_DATA_DEPARTURE = "tickets/SET_DATA_DEPARTURE"
export const TOGGLE_TICKETS_SUCCESS = "tickets/TOGGLE_TICKETS_SUCCESS"
export const SET_LIKE_TICKET = "tickets/SET_LIKE_TICKET"
export const SET_CURRENT_PAGE = "tickets/SET_CURRENT_PAGE"
const initialState = {
    data: [],
    dataDeparture: null,
    basketCount: 0,
    ticketsLike: [],
    currentPage: null,
    setTicketsSuccess: false,
}

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return { ...state, data: action.tickets }
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.page}
        case SET_DATA_DEPARTURE:
            return { ...state, dataDeparture: action.data }
        case TOGGLE_TICKETS_SUCCESS:
            return { ...state, setTicketsSuccess: action.toggle }
        case SET_LIKE_TICKET:
            if (action.isLike)
                return { ...state, ticketsLike: [...state.ticketsLike, action.ticket], basketCount: ++state.basketCount }
            else
                return { ...state, basketCount: --state.basketCount, ticketsLike: state.ticketsLike.filter(t => { return !deepEqual(t, action.ticket) }) }
        default:
            return state;
    }
}
export default ticketsReducer;

export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets })
export const setCurrentPage = (page)=>({type:SET_CURRENT_PAGE,page})
export const setDataDeparture = (data) => ({ type: SET_DATA_DEPARTURE, data })
export const toggleTicketsSucces = (toggle) => ({ type: TOGGLE_TICKETS_SUCCESS, toggle })

export const setLike = (ticket, isLike) => ({ type: SET_LIKE_TICKET, ticket, isLike })


