import configStore from "./store/configureStore";
// import { bugAdded, getUnresolvedBugs,bugAssignToUser, getBugAssignToUser, loadBugs } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';
import * as actions from './store/apiAction';

import { addBug } from './store/bugs'

const store = configStore()


store.subscribe( () => {
  console.log('state change :', store.getState())
});

// store.dispatch({
//   type: 'error',
//   payload: {
//     message: 'An error occurred'
//   }
// })

// store.dispatch(loadBugs())
store.dispatch(addBug())

// setTimeout(() => store.dispatch(loadBugs()),2000)



//project
// store.dispatch(projectAdded({name: 'Project 1'}));

//bugs
// store.dispatch(bugAdded({ description:'bug2' }));
// store.dispatch(bugAdded({ description:'bug3' }));



//users
// store.dispatch(userAdded({ name: 'user1'}))
// store.dispatch(userAdded({ name: 'user2'}))

// // add bugs to user
// store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));

// const XunresolveBugs = getUnresolvedBugs(store.getState())
// const YunresolveBugs = getUnresolvedBugs(store.getState())

// const bugAddUser = getBugAssignToUser(1)(store.getState())

// console.log(bugAddUser);
// console.log(store.getState());
// console.log(XunresolveBugs  === YunresolveBugs);