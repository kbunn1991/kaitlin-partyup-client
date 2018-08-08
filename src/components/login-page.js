import React from 'react';
import {reduxForm, focus} from 'redux-form';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(this.refs.username.value, this.refs.password.value));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div>
              <h1>Log In</h1>
                <form
                  className="login-form"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
                  {error}
                  <label htmlFor="username">Username</label>
                  <input
                      type="text"
                      name="username"
                      id="username"
                      validate={[required, nonEmpty]}
                      ref='username'
                  />
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      name="password"
                      id="password"
                      validate={[required, nonEmpty]}
                      ref='password'
                  />
                  <button type="submit">
                      Log in
                  </button>
              </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);