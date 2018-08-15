import './index.css';
import {createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';
import groupReducer from './reducers/group';
import authReducer from './reducers/auth';
import {loadAuthToken} from './local-storage';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { reducer as formReducer } from 'redux-form';


// const store = createStore(userReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  userReduce: userReducer,
  groupReduce: groupReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  form: formReducer
}), composeEnhancers(applyMiddleware(thunk)));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;