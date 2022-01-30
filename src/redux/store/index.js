import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../reducers/homeReducer'

const composeThatAlwaysWorks =
    window.__REDUX__DEVTOOLS__EXTENSION_COMPOSE__ || compose;

export const initialState = {
    data: {
        home: [],
    }
}

const bigReducer = combineReducers({
    home: homeReducer
})

const configureStore = createStore(
    bigReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore