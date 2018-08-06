import {  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, SEARCH_GAMES_REQUEST, SEARCH_GAMES_SUCCESS, SEARCH_GAMES_ERROR, ADD_TO_GROUP_REQUEST, ADD_TO_GROUP_SUCCESS, ADD_TO_GROUP_ERROR, GET_MY_GROUP_REQUEST, GET_MY_GROUP_SUCCESS, GET_MY_GROUP_ERROR } from '../actions/users'

const initialState = {
  users: [],
  loading: false,
  error: null,
  inMyGroup: false
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
  } else if (action.type === ADD_TO_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADD_TO_GROUP_SUCCESS) {
    return Object.assign({}, state, {
      users: state.users.map(user => {
        if(user._id === action.id) {
          user.inMyGroup = !user.inMyGroup
        }
        return user;
      } ),
      loading: false,
      error: null
    })
  } else if (action.type === ADD_TO_GROUP_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  } else if (action.type === GET_MY_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === GET_MY_GROUP_SUCCESS) {
    return Object.assign({}, state, {
      users: state.users.filter(user => user.inMyGroup === true),
      loading: false,
      error: null
    })
  } else if (action.type === GET_MY_GROUP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}