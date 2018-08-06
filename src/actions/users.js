// ASYNC ACTION

import {API_BASE_URL} from '../config'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
})

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users
})

export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const fetchUsersError = error => ({
  type: FETCH_USERS_ERROR,
  error
})

export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest());
  return fetch(`${API_BASE_URL}/api/users`)
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(fetchUsersSuccess(res)) 
  )
  .catch(err =>
    dispatch(fetchUsersError(err))
  );
}