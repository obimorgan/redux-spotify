import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../reducers/homeReducer.js'

const composeThatAlwaysWorks =
    window.__REDUX__DEVTOOLS__EXTENSION_COMPOSE__ || compose;

export const initialState = {
    data: {
        home: [],
    }
}

const bigReducer = combineReducers({
    data: homeReducer
})

const configureStore = createStore(
    bigReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore