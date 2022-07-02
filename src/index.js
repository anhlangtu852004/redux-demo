import configStore from "./store/configureStore";
import { bugAdded } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configStore()


store.subscribe( () => {
  console.log('state change :', store.getState())
});


store.dispatch(projectAdded({name: 'Project 1'}));

store.dispatch(bugAdded({ description:'bug2' }));
store.dispatch(bugAdded({ description:'bug3' }));


console.log(store.getState());