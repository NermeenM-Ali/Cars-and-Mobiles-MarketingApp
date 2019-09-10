import * as types from '../actions/ActionTypes'


const initialState = {
    loading: false,
    error: null,
    data: []
}

const MemberReducer =(state=initialState, action)=> {
    switch(action.type) {
        case types.MEMBER_FETCHING: 
            return {...state, loading: true, error: null, data:[]}
        case types.MEMBER_FETCHING_SUCCESS: 
            return {...state, loading: false, error: null, data: action.payload}
        case types.MEMBER_FETCHING_FAILER:
            return {...state, loading:false, error: action.payload, data:[]}   
        default:
            return state         
    }
}

export default MemberReducer