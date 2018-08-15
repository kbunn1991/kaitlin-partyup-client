import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './nav2.css';

export class NavBar2 extends React.Component {

    render() {
      return (
          <div className="nav2">
              <Link to="">My Profile</Link>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar2)