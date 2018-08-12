import { combineReducers } from 'redux';

import ListReducer from '../features/list/reducers';

const rootReducer = combineReducers({
  ListR: ListReducer
});

export default rootReducer;
