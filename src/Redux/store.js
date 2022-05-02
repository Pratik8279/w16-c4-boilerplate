// create store here
import {legacy_createStore as createStore, applyMiddleware,compose} from "redux";
import { reducer } from "./reducer";

const middleware= (store)=>(next)=>(action)=>{
  if(typeof action == "function"){
    action(store.dispatch)
  }
next(action);
}

const enhancer= compose(
  applyMiddleware(middleware)
)

export const store = createStore(enhancer)

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
