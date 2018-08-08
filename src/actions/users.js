// ASYNC ACTION

// import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .catch(err => {
          const {reason, message, location} = err;
          if (reason === 'ValidationError') {
              // Convert ValidationErrors into SubmissionErrors for Redux Form
              return Promise.reject(
                  // new SubmissionError({
                  //     [location]: message
                  // })
              );
          }
      });
};

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

export const fetchUsers = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(authToken);
  dispatch(fetchUsersRequest());
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
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

export const FETCH_ONE_USER_REQUEST = 'FETCH_ONE_USER_REQUEST';
export const fetchOneUserRequest = () => ({
  type: FETCH_ONE_USER_REQUEST
})

export const FETCH_ONE_USER_SUCCESS = 'FETCH_ONE_USER_SUCCESS';
export const fetchOneUserSuccess = user => ({
  type: FETCH_ONE_USER_SUCCESS,
  user
})

export const FETCH_ONE_USER_ERROR = 'FETCH_ONE_USER_ERROR';
export const fetchOneUserError = error => ({
  type: FETCH_ONE_USER_ERROR,
  error
})

export const fetchOneUser = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchOneUserRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(fetchOneUserSuccess(res)) 
  )
  .catch(err =>
    dispatch(fetchOneUserError(err))
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

export const filterUsers = game => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(searchGamesRequest(game));
  return fetch(`${API_BASE_URL}/api/users/?searchTerm=${game}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(searchGamesSuccess(res)) 
  )
  .catch(err =>
    dispatch(searchGamesError(err))
  );
};

export const ADD_TO_GROUP_REQUEST = 'ADD_TO_GROUP_REQUEST';
export const addToGroupRequest = () => ({
  type: ADD_TO_GROUP_REQUEST
})

export const ADD_TO_GROUP_SUCCESS = 'ADD_TO_GROUP_SUCCESS';
export const addToGroupSuccess = (id) => ({
  type: ADD_TO_GROUP_SUCCESS,
  id
})

export const ADD_TO_GROUP_ERROR = 'ADD_TO_GROUP_ERROR';
export const addToGroupError = error => ({
  type: ADD_TO_GROUP_ERROR,
  error
})

export const addToGroup = id => dispatch => {
  dispatch(addToGroupRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}`)
  .then(res => {
    return res.json()
  })
  .then(res =>
    dispatch(addToGroupSuccess(id))
  )
  .catch(err => {
    dispatch(addToGroupError(err))
  });
};

// export const GET_MY_GROUP_REQUEST = 'GET_MY_GROUP_REQUEST';
// export const getMyGroupRequest = () => ({
//   type: GET_MY_GROUP_REQUEST
// });

// export const GET_MY_GROUP_SUCCESS = 'GET_MY_GROUP_SUCCESS';
// export const getMySuccess = users => ({
//   type: GET_MY_GROUP_SUCCESS,
//   users
// });

// export const GET_MY_GROUP_ERROR = 'GET_MY_GROUP_ERROR';
// export const getMyGroupError = error => ({
//   type: GET_MY_GROUP_ERROR,
//   error
// });

export const getMyGroup = () => dispatch => {
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