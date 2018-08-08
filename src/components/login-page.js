// import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';

// export class  Login extends React.Component {

//   onSubmit(values) {
//     return this.props.dispatch(login(values.username, values.password));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Welcome to Party Up!</h1>
//         <h3>Log in</h3>
//         <form
//           onSubmit={this.props.handleSubmit(values =>
//               this.onSubmit(values)
//           )}
//           >
//           <label htmlFor="username">Username</label>
//           <input type="text" name="username"></input>
//           <label htmlFor="password">Password</label>
//           <input type="text" name="password"></input>
//           <button type="submit">Log In</button>
//         </form>
//         <div>Don't have an account? Please <a href="/register">register</a>.</div>

//       </div>
//     )
//   }
// }

// export default reduxForm({
//     form: 'login',
//     onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
// })(Login);

import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
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