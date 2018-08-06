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

export const SEARCH_GAMES_REQUEST= 'SEARCH_GAMES_REQUEST';
export const searchGamesRequest = () => ({
  type: SEARCH_GAMES_REQUEST
});

export const SEARCH_GAMES_SUCCESS = 'SEARCH_GAMES_SUCCESS';
export const searchGamesSuccess = users => ({
  type: SEARCH_GAMES_SUCCESS,
  users
});

export const SEARCH_GAMES_ERROR = 'SEARCH_GAMES_ERROR';
export const searchGamesError = error => ({
  type: SEARCH_GAMES_ERROR,
  error
});

export const filterUsers = game => dispatch => {
  dispatch(searchGamesRequest(game));
  return fetch(`${API_BASE_URL}/api/users/?searchTerm=${game}`)
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(searchGamesSuccess(res)) 
  )
  .catch(err =>
    dispatch(searchGamesError(err))
  );
}