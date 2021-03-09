export const UPDATE_INPUT = "search/UPDATE_INPUT"
export const SET_HELP_INPUT = "search/SET_HELP_INPUT"
export const CLEAR_INPUT = "search/CLEAR_INPUT"
const initialState = {
    originInput: "", //id инпута  = 1
    originHelp: [],
    destinationInput: "", //id инпута  = 2
    destinationHelp: []
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
        case CLEAR_INPUT:
            return (action.id == 1) ? { ...state, originHelp: [] } :
                { ...state, destinationHelp: [] }
        default:
            return state;
    }
}
export default searchReducer;

export const updateInputValue = (value, id) => ({ type: UPDATE_INPUT, value, id })
export const clearInput = (id) => ({ type: CLEAR_INPUT, id })
export const setHelpInpuit = (data, id) => ({ type: SET_HELP_INPUT, data, id })