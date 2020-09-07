import { combineReducers } from 'redux';

import masterReducer from './master/master.reducer';
import detailReducer from './detail/detail.reducer';

export default combineReducers({
  master: masterReducer,
  detail: detailReducer
})
