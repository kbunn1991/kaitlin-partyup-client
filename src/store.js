import './index.css';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';
import groupReducer from './reducers/group';
import authReducer from './reducers/auth';

// const store = createStore(userReducer, applyMiddleware(thunk));

const store = createStore(combineReducers({
  userReduce: userReducer,
  groupReduce: groupReducer,
  auth: authReducer
}), applyMiddleware(thunk));


export default store;