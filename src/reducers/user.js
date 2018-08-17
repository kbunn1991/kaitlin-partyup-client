import {  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, SEARCH_GAMES_REQUEST, SEARCH_GAMES_SUCCESS, SEARCH_GAMES_ERROR, ADD_TO_GROUP_REQUEST, ADD_TO_GROUP_SUCCESS, ADD_TO_GROUP_ERROR, FETCH_ONE_USER_REQUEST, FETCH_ONE_USER_SUCCESS, FETCH_ONE_USER_ERROR, EDIT_MY_PROFILE_REQUEST, EDIT_MY_PROFILE_SUCCESS, EDIT_MY_PROFILE_ERROR, DELETE_GAME_REQUEST, DELETE_GAME_SUCCESS, DELETE_GAME_ERROR, DELETE_TAG_REQUEST, DELETE_TAG_SUCCESS, DELETE_TAG_ERROR, ENDORSE_USER_REQUEST, ENDORSE_USER_SUCCESS, ENDORSE_USER_ERROR } from '../actions/users'

const initialState = {
  users: [],
  currentUser: {},
  loading: false,
  error: null,
  inMyGroup: false,
  games: [],
  gameId: null,
  tagId: null
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
  } else if (action.type === FETCH_ONE_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_ONE_USER_SUCCESS) {
    return Object.assign({}, state, {
      currentUser: action.user,
      loading: false,
      error: null
    })
  } else if(action.type === FETCH_ONE_USER_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
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
  } else if (action.type === EDIT_MY_PROFILE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === EDIT_MY_PROFILE_SUCCESS) {
    let games = state.currentUser.games;
    console.log(games);
    console.log(state.currentUser);
    return Object.assign({}, state, {
      currentUser: action.user,
      games: [...games, action.myGames],
      loading: false,
      error: null
    })
  } else if (action.type === EDIT_MY_PROFILE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === DELETE_GAME_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === DELETE_GAME_SUCCESS) {
    return Object.assign({}, state, {
      gameId: action.gameId,
      loading: false,
      error: null

    })
  } else if (action.type === DELETE_GAME_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === DELETE_TAG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === DELETE_TAG_SUCCESS) {
    return Object.assign({}, state, {
      tagId: action.tagId,
      loading: false,
      error: null

    })
  } else if (action.type === DELETE_TAG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === ENDORSE_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ENDORSE_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null
    })
  } else if (action.type === ENDORSE_USER_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } return state
}