import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export function Register(props) {
  // Redirect to /findPlayers if logged in (automatically happens if reg is successful)
  if (props.loggedIn) {
    return <Redirect to='/findPlayers' />
  }
  return (
    <div className="registerPage">
      <h2>Register for Party Up!</h2>
      <RegistrationForm />
      <Link to="/">Login</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Register);
