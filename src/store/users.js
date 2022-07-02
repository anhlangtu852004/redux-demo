// import { createAction,createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (bugs, action) => {
      bugs.push ({
        id: ++lastId,
        name: action.payload.name
      })
    },

  }
})

console.log(slice)

export default slice.reducer;
export const { userAdded } =  slice.actions

//createSelector
// export const getUnresolvedBugs = state => state.entities.bugs.filter( bug => !bug.resolve)




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
 