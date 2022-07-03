import axios from "axios";
import * as actions from '../apiAction'

// const action = {
//     type: 'callApiBegun',
//     payload: {
//         url: '/bugs',
//         method: 'get',
//         data:{},
//         onSeccess: 'bugsReceived',
//         onError: 'apiResquestFail'
//     }
// }

const api = ({ dispatch }) => next => action => {
    if( action.type !== actions.apiRequestBegan.type){
        return next(action)
    }
    
    
    const {url, method, data,onStart,onSeccess, onError} = action.payload;
    if(onStart) {dispatch({type: onStart})}
    next(action);
    axios.request({
        baseURL: 'http://localhost:9002/api',
        url,
        method,
        data,
    })
    .then((respone)=> {
        //general
        dispatch(actions.apiRequestSuccess(respone.data))
        if(onSeccess) {
            dispatch({
                type: onSeccess,
                payload: respone.data
            })
        }
    })
    .catch((error) => {
        //general
        dispatch (actions.apiResquestFail(error.message));
        if(onError){
            dispatch({
                type:onError,
                payload: error.message
            })
        }
        
    })
}

export default api;