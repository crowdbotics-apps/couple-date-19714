import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn293133Reducer from '../features/SignIn293133/redux/reducers'
import SignIn293105Reducer from '../features/SignIn293105/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn293133: SignIn293133Reducer,
SignIn293105: SignIn293105Reducer,

});