import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';
import HeaderBar from './header-bar';

export class Register extends React.Component {

  render() {

    console.log(this.props);

    if (this.props.loggedIn) {
      <Redirect to='/findPlayers' />
    }
    
    return (
      <section className="registerPage">
        <HeaderBar />
        <RegistrationForm />
        </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Register);
