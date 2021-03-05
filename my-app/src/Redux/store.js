import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers(
    {
        form: formReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers())
window.__store = store;

export default store