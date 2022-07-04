// import { createAction,createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';
import { apiRequestBegan } from './apiAction';
import moment from 'moment';


let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs,action) => {
      bugs.loading = true
    },
    bugRequestFail: (bugs, action) => {
      bugs.loading = false
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now()

    },
    bugAdded: (bugs, action) => {
      bugs.list.push (action.payload)
    },
    bugResolved: (bugs,action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true
    },
    bugAssignToUser: (bugs, action) => {
      //bugId , userId
      console.log(action)
      const { id:bugId , userId } = action.payload
      const index = bugs.list.findIndex(bug => bug.id === bugId)
      bugs.list[index].userId = userId
    }

  }
})

console.log(slice)

export default slice.reducer;
export const { bugAdded, bugResolved, bugAssignToUser, bugsReceived, bugsRequested, bugRequestFail } =  slice.actions
const url = '/bugs'

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } =  getState().entities.bugs
  console.log(lastFetch)

  const diffInMinutes = moment().diff(moment(lastFetch),'minutes')
  if (diffInMinutes < 10){
    return
  }

  dispatch(
    apiRequestBegan (
      {
        url,
        method: 'get',
        data:{},
        onSuccess: bugsReceived.type,
        onStart: bugsRequested.type,
        onError: bugRequestFail.type
      }
    )
  )
};

export const addBugs = () => apiRequestBegan (
  {
    url,
    method: 'post',
    data:{description: 'a'},
    onSuccess: bugAdded.type,
  }
)

export const resolveBugs = (id) => apiRequestBegan (
  {
    url: url + '/' + id,
    method: 'patch',
    data:{resolved: 'true'},
    onSuccess: bugResolved.type,
  }
)
export const assignBugToUser = (bugId,userId) => apiRequestBegan (
  {
    url: url + '/' + bugId,
    method: 'patch',
    data:{userId: userId},
    onSuccess: bugAssignToUser.type,
  }
)





//createSelector
// export const getUnresolvedBugs = state => state.entities.bugs.filter( bug => !bug.resolve)
export const getUnresolvedBugs =  createSelector (
  state => state.entities.bugs.list,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter (bug => !bug.resolved) 
)

export const getBugAssignToUser = userId =>  createSelector (
  state => state.entities.bugs.list,
  bugs => bugs.filter(bug => bug.userId === userId )
  
)




// //actions creators
// export const bugAdded = createAction('bugAdded');
// export const bugRemoved = createAction('bugRemoved');
// export const bugResolved = createAction('bugResolved');


//reducer


// export default createReducer([],{
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push ({
//       id: ++lastId,
//       description: action.payload.description,
//       resolve: false
//     })
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs[index].resolve = true
//   }
// })
 