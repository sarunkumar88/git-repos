import DetailActionTypes from './detail.action.types';

export const fetchDetailStart = () => ({
  type: DetailActionTypes.FETCH_DETAIL_START
})

export const fetchDetailSuccess = data => ({
  type: DetailActionTypes.FETCH_DETAIL_SUCCESS,
  payload: data
})

export const fetchDetailFailure = error => ({
  type: DetailActionTypes.FETCH_DETAIL_FAILURE,
  payload: error
})

export const fetchDetailAsyncStart = (url) => {
  return async dispatch => {
    dispatch(fetchDetailStart());
    try {
      const response = await fetch(url)
      const contributors = await response.json();
      dispatch(fetchDetailSuccess(contributors));
    } catch(error) {
      dispatch(fetchDetailFailure(error));
    }
  }
}