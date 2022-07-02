import configStore from "./store/configureStore";
import { bugAdded, getUnresolvedBugs,bugAssignToUser, getBugAssignToUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configStore()


store.subscribe( () => {
  console.log('state change :', store.getState())
});

//project
store.dispatch(projectAdded({name: 'Project 1'}));

//bugs
store.dispatch(bugAdded({ description:'bug2' }));
store.dispatch(bugAdded({ description:'bug3' }));



//users
store.dispatch(userAdded({ name: 'user1'}))
store.dispatch(userAdded({ name: 'user2'}))

// add bugs to user
store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));

const XunresolveBugs = getUnresolvedBugs(store.getState())
const YunresolveBugs = getUnresolvedBugs(store.getState())

const bugAddUser = getBugAssignToUser(1)(store.getState())

console.log(bugAddUser);
console.log(store.getState());
console.log(XunresolveBugs  === YunresolveBugs);