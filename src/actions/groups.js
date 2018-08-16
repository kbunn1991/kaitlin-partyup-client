import {API_BASE_URL} from '../config'

export const MAKE_GROUP_REQUEST = 'MAKE_GROUP_REQUEST';
export const makeGroupRequest = groupName => ({
  type: MAKE_GROUP_REQUEST,
  groupName
});

export const MAKE_GROUP_SUCCESS = 'MAKE_GROUP_SUCCESS';
export const makeGroupSuccess = (groupName, game) => ({
  type: MAKE_GROUP_SUCCESS,
  groupName,
  game
});

export const MAKE_GROUP_ERROR = 'MAKE_GROUP_ERROR';
export const makeGroupError = error => ({
  type: MAKE_GROUP_ERROR,
  error
});

export const makeGroup = (groupName, game, tags, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(makeGroupRequest(id));
  return fetch(`${API_BASE_URL}/api/groups`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      groupName: groupName,
      game: game,
      tags: tags.split(','),
      userId: id,
      groupType: 'created'
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

export const fetchGroups = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchGroupRequest());
  return fetch(`${API_BASE_URL}/api/groups`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
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

export const filterGroups = (groupName, game, tags) => (dispatch, getState) => {
  console.log(groupName, game, tags);
  const authToken = getState().auth.authToken;
  dispatch(searchGroupsRequest(groupName));
  return fetch(`${API_BASE_URL}/api/groups/?searchTerm=${groupName}&game=${game}&tags=${tags}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
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

export const JOIN_GROUP_REQUEST = 'JOIN_GROUP_REQUEST';
export const joinGroupRequest = () => ({
  type: JOIN_GROUP_REQUEST
})

export const JOIN_GROUP_SUCCESS = 'JOIN_GROUP_SUCCESS';
export const joinGroupSuccess = () => ({
  type: JOIN_GROUP_SUCCESS
})

export const JOIN_GROUP_ERROR = 'JOIN_GROUP_ERROR';
export const joinGroupError = error => ({
  type: JOIN_GROUP_ERROR,
  error
})

export const joinGroup = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(joinGroupRequest(id));
  return fetch(`${API_BASE_URL}/api/groups/${id}/join`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      groupType: 'joined'
    })
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(joinGroupSuccess(res)) 
  )
  .catch(err =>
    dispatch(joinGroupError(err))
  );
};

export const LEAVE_GROUP_REQUEST = 'LEAVE_GROUP_REQUEST';
export const leaveGroupRequest = () => ({
  type: LEAVE_GROUP_REQUEST
})

export const LEAVE_GROUP_SUCCESS = 'LEAVE_GROUP_SUCCESS';
export const leaveGroupSuccess = () => ({
  type: LEAVE_GROUP_SUCCESS
})

export const LEAVE_GROUP_ERROR = 'LEAVE_GROUP_ERROR';
export const leaveGroupError = error => ({
  type: LEAVE_GROUP_ERROR,
  error
})

export const leaveGroup = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(leaveGroupRequest(id));
  return fetch(`${API_BASE_URL}/api/groups/${id}/leave`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(leaveGroupSuccess(res)) 
  )
  .catch(err =>
    dispatch(leaveGroupError(err))
  );
};

export const GET_MY_GROUPS_REQUEST = 'GET_MY_GROUPS_REQUEST';
export const getMyGroupsRequest = () => ({
  type: GET_MY_GROUPS_REQUEST
})

export const GET_MY_GROUPS_SUCCESS = 'GET_MY_GROUPS_SUCCESS';
export const getMyGroupsSuccess = groups => ({
  type: GET_MY_GROUPS_SUCCESS,
  groups
})

export const GET_MY_GROUPS_ERROR = 'GET_MY_GROUPS_ERROR';
export const getMyGroupsError = error => ({
  type: GET_MY_GROUPS_ERROR,
  error
})

export const getMyGroups = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getMyGroupsRequest());
  return fetch(`${API_BASE_URL}/api/groups/mine`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(getMyGroupsSuccess(res)) 
  )
  .catch(err =>
    dispatch(getMyGroupsError(err))
  );
};

export const GET_CREATED_GROUPS_REQUEST = 'GET_CREATED_GROUPS_REQUEST';
export const getCreatedGroupsRequest = () => ({
  type: GET_CREATED_GROUPS_REQUEST
})

export const GET_CREATED_GROUPS_SUCCESS = 'GET_CREATED_GROUPS_SUCCESS';
export const getCreatedGroupsSuccess = groups => ({
  type: GET_CREATED_GROUPS_SUCCESS,
  groups
})

export const GET_CREATED_GROUPS_ERROR = 'GET_CREATED_GROUPS_ERROR';
export const getCreatedGroupsError = error => ({
  type: GET_CREATED_GROUPS_ERROR,
  error
})

export const getCreatedGroups = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getCreatedGroupsRequest());
  return fetch(`${API_BASE_URL}/api/groups/created`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(getCreatedGroupsSuccess(res)) 
  )
  .catch(err =>
    dispatch(getCreatedGroupsError(err))
  );
};

export const DELETE_GROUP_REQUEST = 'DELETE_GROUP_REQUEST';
export const deleteGroupRequest = () => ({
  type: DELETE_GROUP_REQUEST
})

export const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_REQUEST';
export const deleteGroupSuccess = () => ({
  type: DELETE_GROUP_SUCCESS
})

export const DELETE_GROUP_ERROR = 'DELETE_GROUP_ERROR';
export const deleteGroupError = error => ({
  type: DELETE_GROUP_ERROR,
  error
})

export const deleteGroup = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteGroupRequest());
  return fetch(`${API_BASE_URL}/api/groups/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => {
    dispatch(deleteGroupSuccess(res))
  })
  .catch(err => {
    dispatch(deleteGroupError(err))
  });
};

export const FETCH_ONE_GROUP_REQUEST = 'FETCH_ONE_GROUP_REQUEST';
export const fetchOneGroupRequest = () => ({
  type: FETCH_ONE_GROUP_REQUEST
})

export const FETCH_ONE_GROUP_SUCCESS = 'FETCH_ONE_GROUP_SUCCESS';
export const fetchOneGroupSuccess = group => ({
  type: FETCH_ONE_GROUP_SUCCESS,
  group
})

export const FETCH_ONE_GROUP_ERROR = 'FETCH_ONE_GROUP_ERROR';
export const fetchOneGroupError = error => ({
  type: FETCH_ONE_GROUP_ERROR,
  error
})

export const fetchOneGroup = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchOneGroupRequest(id));
  return fetch(`${API_BASE_URL}/api/groups/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return res.json()
  })
  .then(res => 
    dispatch(fetchOneGroupSuccess(res)) 
  )
  .catch(err =>
    dispatch(fetchOneGroupError(err))
  );
}

// (id, tags, searchTerm)
// ?searhTerm=abc&&tags=y