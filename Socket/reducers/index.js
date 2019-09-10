import { combineReducers } from "redux"
import MemberReducer from './MemberReducer'

const allReducers = combineReducers({
    memb: MemberReducer
})

export default allReducers