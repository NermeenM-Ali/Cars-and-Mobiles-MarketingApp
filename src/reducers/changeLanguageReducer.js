import * as types from '../actions/ActionTypes'

const initialState= {
    Rtl: false
}

const changeLanguageReducer=( state= initialState, action) =>{
    switch (action.type) {
        case types.CHANGE_LANGUAGE:
            return ({...state, Rtl: action.payload})
        default:
            return state
    }
}

export default changeLanguageReducer