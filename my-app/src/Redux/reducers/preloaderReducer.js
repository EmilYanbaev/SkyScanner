export const TOGGLE_PRELOADER_LOGIN_PAGE = "preloader/TOGGLE_PRELOADER_LOGIN_PAGE"
export const TOGGLE_PRELOADER_TICKETS = "preloader/TOGGLE_PRELOADER_TICKETS"


const initialState = {
    viewPreloaderLoginPage: false,
    viewPreloaderSearchTickets: false,
}

let preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRELOADER_LOGIN_PAGE:
            return { ...state, viewPreloaderLoginPage: !state.viewPreloaderLoginPage }
        case TOGGLE_PRELOADER_TICKETS:
            return { ...state, viewPreloaderSearchTickets: !state.viewPreloaderSearchTickets }
        default:
            return state;
    }
}

export default preloaderReducer

export const togglePreloaderLoginPage = () => ({ type: TOGGLE_PRELOADER_LOGIN_PAGE })
export const togglePreloaderTickets = () => ({ type: TOGGLE_PRELOADER_TICKETS })