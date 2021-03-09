export const SET_TICKETS = "tickets/SET_TICKET"

const initialState = {
    data:[]
}

const ticketsReducer = (state=initialState,action) =>{
    switch (action.type) {
        case SET_TICKETS:
            return {...state,data:action.tickets}
        default:
            return state;
    }
}
export default ticketsReducer;

export const setTickets = (tickets)=>({type:SET_TICKETS,tickets})