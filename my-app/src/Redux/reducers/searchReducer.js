export const UPDATE_INPUT = "search/UPDATE_INPUT"
export const SET_HELP_INPUT = "search/SET_HELP_INPUT"
export const CLEAR_INPUT_HELP = "search/CLEAR_INPUT_HELP"
export const SET_HIDDEN_HELP = "search/SET_HIDDEN_HELP"
export const SET_MONTH = "search/SET_MONTH"

export const SET_IATA = "search/SET_IATA"

const initialState = {
    originInput: "", //id инпута  = 1
    // originIata: "",
    originHelp: [],
    hiddenOriginHelp: false,

    destinationInput: "", //id инпута  = 2
    // destinationIata: "",
    destinationHelp: [],
    hiddenDestinationHelp: false,

    month: 3,
}

let searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return (action.id == 1) ? { ...state, originInput: action.value } :
                { ...state, destinationInput: action.value }
        case SET_HELP_INPUT:
            if (state.originInput || state.destinationInput)
                return (action.id == 1) ? { ...state, originHelp: action.data.map(el => ({ name: el.name, code: el.code })) } :
                    { ...state, destinationHelp: action.data.map(el => ({ name: el.name, code: el.code })) }
            else return state
        case CLEAR_INPUT_HELP:
            return (action.id == 1) ? { ...state, originHelp: [] } :
                { ...state, destinationHelp: [] }
        case SET_HIDDEN_HELP:
            return (action.id == 1) ? { ...state, hiddenOriginHelp: action.isHidden } : { ...state, hiddenDestinationHelp: action.isHidden }
        case SET_MONTH:
            return { ...state, month: action.number }
        // case SET_IATA:
        //     return { ...state, originIata: action.originIata, destinationIata: action.destinationIata }
        default:
            return state;
    }
}
export default searchReducer;

export const updateInputValue = (value, id) => ({ type: UPDATE_INPUT, value, id })
export const clearInputHelp = (id) => ({ type: CLEAR_INPUT_HELP, id })
export const setHelpInpuit = (data, id) => ({ type: SET_HELP_INPUT, data, id })
export const setHiddenHelp = (id, isHidden) => ({ type: SET_HIDDEN_HELP, id, isHidden })
export const setMonth = (number) => ({ type: SET_MONTH, number })
// export const setIataCode = (originIata, destinationIata) => ({ type: SET_IATA, originIata, destinationIata })
