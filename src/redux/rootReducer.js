import { combineReducers } from 'redux';

import ListReducer from '../features/list/reducers';
import DetailsReducer from '../features/details/reducers';

const rootReducer = combineReducers({
  ListR: ListReducer,
  DetailsR: DetailsReducer
});

export default rootReducer;
