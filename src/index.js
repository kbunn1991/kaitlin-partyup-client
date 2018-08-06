import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './components/user-list';
import Login from './components/login-page';
import Register from './components/registration-page';
import MyGroup from './components/my-group';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div> 
      <Register />
      <Login />
      <Users />
      <MyGroup />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
