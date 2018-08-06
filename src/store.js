import './index.css';
import {createStore, applyMiddleware} from '../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;