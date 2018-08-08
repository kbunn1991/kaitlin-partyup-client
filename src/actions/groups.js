import {API_BASE_URL} from '../config'

export const MAKE_GROUP_REQUEST = 'MAKE_GROUP_REQUEST';
export const makeGroupRequest = groupName => ({
  type: MAKE_GROUP_REQUEST,
  groupName
});

export const MAKE_GROUP_SUCCESS = 'MAKE_GROUP_SUCCESS';
export const makeGroupSuccess = groupName => ({
  type: MAKE_GROUP_SUCCESS,
  groupName
});

export const MAKE_GROUP_ERROR = 'MAKE_GROUP_ERROR';
export const makeGroupError = error => ({
  type: MAKE_GROUP_ERROR,
  error
});

export const makeGroup = groupName => dispatch => {
  dispatch(makeGroupRequest(groupName));
  return fetch(`${API_BASE_URL}/api/groups`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      groupName: groupName
    })
  })
  .then( body => {
    return body
  })
  .then(res => 
    dispatch(makeGroupSuccess(res))
  )
  .catch(err =>
    dispatch(makeGroupError(err))
  );
}

export const FETCH_GROUPS_REQUEST = 'FETCH_GROUPS_REQUEST';
export const fetchGroupRequest = () => ({
  type: FETCH_GROUPS_REQUEST
});

export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const fetchGroupSuccess = groups => ({
  type: FETCH_GROUPS_SUCCESS,
  groups
});

export const FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR';
export const fetchGroupError = error => ({
  type: FETCH_GROUPS_ERROR,
  error
});

export const fetchGroups = () => dispatch => {
  dispatch(fetchGroupRequest());
  return fetch(`${API_BASE_URL}/api/groups`)
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(fetchGroupSuccess(res)) 
  )
  .catch(err =>
    dispatch(fetchGroupError(err))
  );
}

export const SEARCH_GROUPS_REQUEST= 'SEARCH_GROUPS_REQUEST';
export const searchGroupsRequest = () => ({
  type: SEARCH_GROUPS_REQUEST
});

export const SEARCH_GROUPS_SUCCESS = 'SEARCH_GROUPS_SUCCESS';
export const searchGroupsSuccess = groups => ({
  type: SEARCH_GROUPS_SUCCESS,
  groups
});

export const SEARCH_GROUPS_ERROR = 'SEARCH_GROUPS_ERROR';
export const searchGroupsError = error => ({
  type: SEARCH_GROUPS_ERROR,
  error
});

export const filterGroups = game => dispatch => {
  dispatch(searchGroupsRequest(game));
  return fetch(`${API_BASE_URL}/api/groups/?searchTerm=${game}`)
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(searchGroupsSuccess(res)) 
  )
  .catch(err =>
    dispatch(searchGroupsError(err))
  );
};