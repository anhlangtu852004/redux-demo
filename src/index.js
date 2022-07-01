import store from "./store";
import { bugAdded, bugResolved } from './actionsCreators';

const unSubscribe = store.subscribe( () => {
  console.log('state change :', store.getState())
});


store.dispatch(bugAdded('bug1'));
store.dispatch(bugAdded('bug2'));
store.dispatch(bugAdded('bug3'));

// unSubscribe();

store.dispatch(bugResolved(1)); 

console.log(store.getState());