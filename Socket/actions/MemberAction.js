import * as types from './ActionTypes'
import axios from 'axios'

const fetchingApi = ()=> {
  return  (dispatch)=> {
        dispatch(memberFetching())
        axios.post('http://localhost/meeting/controller/MemberController.php', {operation:'paging', page:1})
        .then(json=> {
            dispatch(memberFetchingSuccess(json.data))
        })
        .catch(error=> {
            dispatch(memberFetchingFailer(error.message))
        })
    }
}

 const memberFetching =()=> ({  
        type:types.MEMBER_FETCHING   
})

 const memberFetchingSuccess = (data)=> ({
    type: types.MEMBER_FETCHING_SUCCESS, 
    payload: data
    
})

 const memberFetchingFailer = (error)=>({
    type: types.MEMBER_FETCHING_FAILER,
     payload: error
    
 })

export default fetchingApi