import * as types from '../actions/ActionTypes'

export const AddToCart =(item)=> {
    return (dispatch)=>{
        dispatch({type: types.ADD_TO_CART, payload: item})
    }
}

export const RemoveFromCart =(item)=> {
    return (dispatch)=> {
        dispatch({type: types.REMOVE_FROM_CART, payload: item})
    }
}

export const EmptyCart =()=> {
    return (dispatch)=> {
        dispatch({type: types.EMPTY_CART})
    }
}