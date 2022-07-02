// import { createAction,createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push ({
        id: ++lastId,
        description: action.payload.description,
        resolve: false
      })
    },
    bugResolved: (bugs,action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolve = true
    },
    bugAssignToUser: (bugs, action) => {
      //bugId , userId
      const index = bugs.findIndex(bug => bug.id === action.payload.bugId)
      bugs[index].userId = action.payload.userId
    }

  }
})

console.log(slice)

export default slice.reducer;
export const { bugAdded, bugResolved,bugAssignToUser } =  slice.actions

//createSelector
// export const getUnresolvedBugs = state => state.entities.bugs.filter( bug => !bug.resolve)
export const getUnresolvedBugs =  createSelector (
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter (bug => !bug.resolve) 
)

export const getBugAssignToUser = userId =>  createSelector (
  state => state.entities.bugs,
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
 