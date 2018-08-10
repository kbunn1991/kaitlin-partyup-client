import { MAKE_GROUP_REQUEST, MAKE_GROUP_SUCCESS, MAKE_GROUP_ERROR, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_REQUEST, FETCH_GROUPS_ERROR, SEARCH_GROUPS_REQUEST, SEARCH_GROUPS_SUCCESS, SEARCH_GROUPS_ERROR, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, JOIN_GROUP_ERROR, GET_MY_GROUPS_REQUEST, GET_MY_GROUPS_SUCCESS, GET_MY_GROUPS_ERROR, LEAVE_GROUP_REQUEST, LEAVE_GROUP_SUCCESS, LEAVE_GROUP_ERROR, GET_CREATED_GROUPS_REQUEST, GET_CREATED_GROUPS_SUCCESS, GET_CREATED_GROUPS_ERROR, DELETE_GROUP_REQUEST, DELETE_GROUP_SUCCESS, DELETE_GROUP_ERROR, FETCH_ONE_GROUP_REQUEST, FETCH_ONE_GROUP_SUCCESS, FETCH_ONE_GROUP_ERROR } from '../actions/groups';

const initialState = {
  groups: [],
  currentGroup: {},
  loading: false,
  error: null
}

export default function groupReducer(state = initialState, action) {
  if (action.type === MAKE_GROUP_REQUEST) {
    console.log(action);
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === MAKE_GROUP_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      groups: [...state.groups, action.groupName],
      loading: false,
      error: null
    })
  } else if (action.type === MAKE_GROUP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_GROUPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_GROUPS_SUCCESS) {
    return Object.assign({}, state, {
      groups: action.groups,
      loading: false,
      error: null
    })
  } else if (action.type === FETCH_GROUPS_ERROR) {
    return Object.assign({}, state, {
      loading: false, 
      error: action.error
    })
  } else if (action.type === SEARCH_GROUPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === SEARCH_GROUPS_SUCCESS) {
    return Object.assign({}, state, {
      groups: action.groups,
      loading: false,
      error: null
    })
  } else if (action.type === SEARCH_GROUPS_ERROR) {
    return Object.assign({}, state, {
      loading: false, 
      error: action.error
    }) 
  } else if (action.type === JOIN_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === JOIN_GROUP_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null
    })
  } else if (action.type === JOIN_GROUP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === LEAVE_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === LEAVE_GROUP_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null
    })
  } else if (action.type === LEAVE_GROUP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === GET_MY_GROUPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === GET_MY_GROUPS_SUCCESS) {
    return Object.assign({}, state, {
      groups: action.groups,
      loading: false,
      error: null
    })
  } else if (action.type === GET_MY_GROUPS_ERROR) {
    return Object.assign({}, state, {
      loading: false, 
      error: action.error
    })
  } else if (action.type === GET_CREATED_GROUPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === GET_CREATED_GROUPS_SUCCESS) {
    return Object.assign({}, state, {
      groups: action.groups,
      loading: false,
      error: null
    })
  } else if (action.type === GET_CREATED_GROUPS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === DELETE_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === DELETE_GROUP_SUCCESS) {
    const indexToDelete = state.findIndex(group => {
      return group._id === action.group._id
    })
    return Object.assign({}, state, {
      groups: this.groups.splice(indexToDelete, 1),
      loading: false,
      error: null
    })
  } else if (action.type === DELETE_GROUP_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }  else if (action.type === FETCH_ONE_GROUP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_ONE_GROUP_SUCCESS) {
    return Object.assign({}, state, {
      currentGroup: action.group,
      loading: false,
      error: null
    })
  } else if(action.type === FETCH_ONE_GROUP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } return state
}