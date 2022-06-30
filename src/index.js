import store from "./store";
import { bugAdded, bugRemoved } from './actionsCreators';

const unSubscribe = store.subscribe( () => {
  console.log('state change :', store.getState())
});


store.dispatch(bugAdded());

unSubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());