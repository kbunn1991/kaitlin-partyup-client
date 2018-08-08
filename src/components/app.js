import React from 'react';
import {connect} from 'react-redux';
import Users from './user-list';
import LoginForm from './login-page';
// import LandingPage from './landing-page';
import Register from './registration-page';
import MyGroup from './my-group';
import EditProfile from './edit-profile';
import SearchGroups from './search-groups';
import {Route, withRouter, Link} from 'react-router-dom';

import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                  <div>
                    <h1><Link to="/">Party Up!</Link></h1>
                    <div><a href="/register">register</a></div>
                    <div><a href="/login">login</a></div>
                    <div><a href="/findPlayers">users</a></div>
                    <div><a href="/myGroup">my groups</a></div>
                    <div><a href="/editProfile">edit my profile</a></div>
                    <div><a href="/searchGroups">search groups</a></div>
                    {/* <Route exact path="/" component={LandingPage} /> */}
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/findPlayers" component={Users} />
                    <Route exact path="/myGroup" component={MyGroup} />
                    <Route exact path="/editProfile" component={EditProfile} />
                    <Route exact path="/searchGroups" component={SearchGroups} />
                  </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));