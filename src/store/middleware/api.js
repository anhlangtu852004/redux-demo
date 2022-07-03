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
    next(action);
    const {url, method, data,onSeccess, onError} = action.payload;
    axios.request({
        baseURL: 'http://localhost:9001/api',
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
        dispatch (actions.apiResquestFail(error))
        if(onError){
            dispatch({
                type:onError,
                payload: error
            })
        }
        
    })
}

export default api;