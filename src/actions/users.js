// ASYNC ACTION

// import {SubmissionError} from 'redux-form';
import { authSuccess } from './auth';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(res => normalizeResponseErrors(res))
      .then(() => dispatch(authSuccess()))
      .then(res => res.json())
      .catch(err => {
          const {reason} = err;
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

export const EDIT_MY_PROFILE_REQUEST = 'EDIT_MY_PROFILE_REQUEST';
export const editMyProfileRequest = () => ({
  type: EDIT_MY_PROFILE_REQUEST
});

export const EDIT_MY_PROFILE_SUCCESS = 'EDIT_MY_PROFILE_SUCCESS';
export const editMyProfileSuccess = (currentUser, games) => ({
  type: EDIT_MY_PROFILE_SUCCESS,
  currentUser,
  games
});

export const EDIT_MY_PROFILE_ERROR = 'EDIT_MY_PROFILE_ERROR';
export const editMyProfileError = error => ({
  type: EDIT_MY_PROFILE_ERROR,
  error
});

export const editMyProfile = (id, profileImage, bio, myGames, myTags) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(editMyProfileRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      profileImage,
      bio: bio,
      games: myGames.split(','),
      tags: myTags.split(',')
    })
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(editMyProfileSuccess(res))
  )
  .catch(err => 
    dispatch(editMyProfileError(err))
  );
}

export const DELETE_GAME_REQUEST = 'DELETE_GAME_REQUEST';
export const deleteGameRequest = () => ({
  type: DELETE_GAME_REQUEST
})

export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const deleteGameSuccess = game => ({
  type: DELETE_GAME_SUCCESS,
  game
})

export const DELETE_GAME_ERROR = 'DELETE_GAME_ERROR';
export const deleteGameError = error => ({
  type: DELETE_GAME_ERROR,
  error
})

export const deleteGame = (id, gameId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(gameId);
  dispatch(deleteGameRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}/deleteGame`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      gameId
    })
  })
  .then(res =>
    dispatch(deleteGameSuccess(res))
  )
  .then(err =>
    dispatch(deleteGameError(err))
  );
}

export const DELETE_TAG_REQUEST = 'DELETE_TAG_REQUEST';
export const deleteTagRequest = () => ({
  type: DELETE_TAG_REQUEST
})

export const DELETE_TAG_SUCCESS = 'DELETE_TAG_SUCCESS';
export const deleteTagSuccess = game => ({
  type: DELETE_TAG_SUCCESS,
  game
})

export const DELETE_TAG_ERROR = 'DELETE_TAG_ERROR';
export const deleteTagError = error => ({
  type: DELETE_TAG_ERROR,
  error
})

export const deleteTag = (id, tagId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(tagId);
  dispatch(deleteTagRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}/deleteTag`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tagId
    })
  })
  .then(res =>
    dispatch(deleteTagSuccess(res))
  )
  .then(err =>
    dispatch(deleteTagError(err))
  );
}

export const ENDORSE_USER_REQUEST = 'ENDORSE_USER_REQUEST';
export const endorseUserRequest = () => ({
  type: ENDORSE_USER_REQUEST
})

export const ENDORSE_USER_SUCCESS = 'ENDORSE_USER_SUCCESS';
export const endorseUserSuccess = () => ({
  type: ENDORSE_USER_SUCCESS
})

export const ENDORSE_USER_ERROR = 'ENDORSE_USER_ERROR';
export const endorseUserError = error => ({
  type: ENDORSE_USER_ERROR,
  error
})

export const endorseUser = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(endorseUserRequest(id));
  return fetch(`${API_BASE_URL}/api/users/${id}/endorse`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(endorseUserSuccess(res)) 
  )
  .catch(err =>
    dispatch(endorseUserError(err))
  );
};