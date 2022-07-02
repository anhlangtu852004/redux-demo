import configStore from "./store/configureStore";
import { bugAdded, getUnresolvedBugs } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configStore()


store.subscribe( () => {
  console.log('state change :', store.getState())
});


store.dispatch(projectAdded({name: 'Project 1'}));

store.dispatch(bugAdded({ description:'bug2' }));
store.dispatch(bugAdded({ description:'bug3' }));

const XunresolveBugs = getUnresolvedBugs(store.getState())
const YunresolveBugs = getUnresolvedBugs(store.getState())



console.log(store.getState());
console.log(XunresolveBugs  === YunresolveBugs);