import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import { withRouter, Link } from 'react-router-dom';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import './registration-form.css';
const passwordLength = length({min: 5, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => {
        this.props.history.push('/userManual');
        console.log('redirect');
      });
  }
  
  render() {
    return (
      <section>
        <div className="logBar"><div className="formWords">Register for Party Up!</div></div>
        <form
          className="registration-form"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="formClass">
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text" 
              name="username"
              placeholder="username"
              aria-label="username"
              validate={[required, nonEmpty, isTrimmed]} 
              />
          </div>
          <div className="formClass">
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              aria-label="password"
              validate={[required, passwordLength, isTrimmed]} 
              placeholder="password" />
          </div>
          <div className="formClass">
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field 
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              placeholder="confirm password" />
          </div>
          <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Register
          </button>

          <div className="linkContain"><Link to="/">Have an account? Login!</Link></div>
        </form>
      </section>
    )
  }
}

export default withRouter(reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
  dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm));