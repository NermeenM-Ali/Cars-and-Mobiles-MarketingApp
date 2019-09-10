import changeLanguageReducer from './changeLanguageReducer'
import cartReducer from './cartReducer'
import counterReducer from './counterReducer'
import { combineReducers } from "redux"

const allReducers = combineReducers({
    lang: changeLanguageReducer,
    cart: cartReducer,
    count: counterReducer

})

export default allReducers