import * as types from '../actions/ActionTypes'

const initialState = {
    items: [],
    total: 0
}

 const cartReducer =(state= initialState, action)=> {

    switch (action.type) {
        case types.ADD_TO_CART:
            return { items: [...state.items, action.payload]}
        
        case types.REMOVE_FROM_CART:
            return { ...state, items:state.items.filter((item, i) => item !== action.payload)}
            
        case types.EMPTY_CART: 
            return {...state, items:[], total:0}    
        default:
             return state     
    }
}

export default cartReducer