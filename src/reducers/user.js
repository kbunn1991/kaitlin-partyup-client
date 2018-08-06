import {  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, SEARCH_GAMES_REQUEST, SEARCH_GAMES_SUCCESS, SEARCH_GAMES_ERROR } from '../actions/users'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export default function userReducer(state = initialState, action) {
  if (action.type === FETCH_USERS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_USERS_SUCCESS) {
    return Object.assign({}, state, {
      users: action.users,
      loading: false,
      error: null
    })
  } else if (action.type === FETCH_USERS_ERROR) {
    return Object.assign({}, state, {
      loading: false, 
      error: action.error
    })
  } if (action.type === SEARCH_GAMES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === SEARCH_GAMES_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      users: action.users,
      loading: false,
      error: null
    })
  } else if (action.type === SEARCH_GAMES_ERROR) {
    return Object.assign({}, state, {
      loading: false, 
      error: action.error
    }) 
  } return state
}