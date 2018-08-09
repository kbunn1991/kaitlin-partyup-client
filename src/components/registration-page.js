import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export class Register extends React.Component {

  render() {

    console.log(this.props);

    if (this.props.loggedIn) {
      <Redirect to='/findPlayers' />
    }
    
    return (
      <div className="registerPage">
        <h2>Register for Party Up!</h2>
        <RegistrationForm />
        <Link to="/">Login</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Register);
