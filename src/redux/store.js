import { combineReducers, createStore, applyMiddleware } from 'redux'
import reducerComments from './comments/reducerComments'
import reducerPhone from './phone/reducerPhone'
import reducerTv from './tv/reducerTv'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    phone : reducerPhone,
    television : reducerTv,
    comments : reducerComments
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
