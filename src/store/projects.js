import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
  
const slice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push ({
        id: ++lastId,
        name: action.payload.name
      })
    },

  }
})

console.log(slice);

export default slice.reducer;
export const { projectAdded } =  slice.actions