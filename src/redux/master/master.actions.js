import MasterActionTypes from './master.action.types';

export const fetchMasterStart = () => ({
  type: MasterActionTypes.FETCH_MASTER_START
})

export const fetchMasterSuccess = data => ({
  type: MasterActionTypes.FETCH_MASTER_SUCCESS,
  payload: data
})

export const fetchMasterFailure = error => ({
  type: MasterActionTypes.FETCH_MASTER_FAILURE,
  payload: error
})

export const toggleFavorite = item => ({
  type: MasterActionTypes.TOGGLE_FAVORITE,
  payload: item
})

export const fetchMasterAsyncStart = () => {
  return async dispatch => {
    dispatch(fetchMasterStart());
    try {
      const response = await fetch('https://api.github.com/repositories?since=0');
      const masterList = await response.json();
      dispatch(fetchMasterSuccess(masterList));
    } catch(error) {
      dispatch(fetchMasterFailure(error));
    }
  }
}

export const toggleItem = (id) => {
  return dispatch => {
    dispatch(toggleFavorite(id));
  }
}