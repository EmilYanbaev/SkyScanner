import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleWare from "redux-saga"
import authReducer from "./reducers/authReducer";
import preloaderReducer from "./reducers/preloaderReducer";
import searchReducer from "./reducers/searchReducer";
import ticketsReducer from "./reducers/ticketsReducer";
import {sagaWatcher } from "./sagas";

const saga = createSagaMiddleWare();

const reducers = combineReducers(
    {
        auth: authReducer,
        search:searchReducer,
        tickets:ticketsReducer,
        preloaders:preloaderReducer,
        form: formReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)))
window.__store = store;

saga.run(sagaWatcher)

export default store