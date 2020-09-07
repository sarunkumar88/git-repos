import DetailActionTypes from './detail.action.types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined
}

const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DetailActionTypes.FETCH_DETAIL_START:
      return {
        ...state,
        isFetching: true
      }
    case DetailActionTypes.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    case DetailActionTypes.FETCH_DETAIL_FAILURE:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}

export default detailReducer;
