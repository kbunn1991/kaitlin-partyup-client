import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import { Link } from 'react-router-dom';
import {clearAuthToken} from '../local-storage';
import './nav-bar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

export class NavBar extends React.Component {
  constructor(props) {
      super(props)

      this.menuToggle = false;
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  } 

    render() {
      // Only render the log out button if we are logged in
      let logOutButton;
      if (this.props.loggedIn) {
          logOutButton = (
              <button onClick={() => this.logOut()}>Log out</button>
          );
      }
      return (
          <div className="nav-bar">
              {logOutButton}
            <div className="hamburger-button">
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <div className="menu">
                    <Link to={`/users/${this.props.userId}`}>My Profile</Link>
                    <Link to="/editProfile">Edit Profile</Link>
                    <Link to="/myGroup">My Groups</Link>
                    <Link to="/searchGroups">Find Groups</Link>
                    <Link to="/findPlayers">Search Users</Link>
                </div>
            </div>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  menuToggle: false,
  userId: state.auth.currentUser._id,
});

export default connect(mapStateToProps)(NavBar)