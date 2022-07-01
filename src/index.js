import configStore from "./store/configureStore";
import { bugAdded, bugResolved } from './store/bugs';

const store = configStore()

store.subscribe( () => {
  console.log('state change :', store.getState())
});


store.dispatch(bugAdded({ description:'bug1' }));
store.dispatch(bugAdded({ description:'bug2' }));
store.dispatch(bugAdded({ description:'bug3' }));

store.dispatch(bugResolved({id: 1})); 

console.log(store.getState());