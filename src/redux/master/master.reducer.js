import MasterActionTypes from './master.action.types';
import { toggleFavorite } from './master.util';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined,
  favorites: []
}

const masterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MasterActionTypes.FETCH_MASTER_START:
      return {
        ...state,
        isFetching: true
      }
    case MasterActionTypes.FETCH_MASTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    case MasterActionTypes.FETCH_MASTER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      }
    case MasterActionTypes.TOGGLE_FAVORITE: 
      return {
        ...state,
        favorites: toggleFavorite(state.favorites, action.payload)
      }
    default:
      return state;
  }
}

export default masterReducer;
