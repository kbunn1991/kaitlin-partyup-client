import React from 'react';
import {reduxForm, focus} from 'redux-form';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';
import './login-page.css';

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
            <section className="loginPage">
              <div className="logBar"><div className="logWords">Please <i>log in</i> to use our features</div></div>
                <form
                  className="login-form"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
                  {error}
                  <div className="formClass">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                        ref='username'
                        aria-label='Username'
                        placeholder="username"
                    />
                  </div>
                  <div className="formClass">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        aria-label='Password'
                        validate={[required, nonEmpty]}
                        ref='password'
                        placeholder="password"
                    />
                  </div>
                  <button type="submit">
                      Log in
                  </button>

                  <div className="linkContain">
                    <Link to="/register">Register</Link>
                  </div>
              </form>
            </section>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);