import React from 'react';
import {connect} from 'react-redux';
import Users from './user-list';
import LandingPage from './landing-page';
import {Register} from './registration-page';
import MyGroup from './my-group';
import GroupProfile from './group-profile';
import EditProfile from './edit-profile';
import SearchGroups from './search-groups';
import UserProfile from './user-profile';
import UserManual from './user-manual';
import { Route, withRouter } from 'react-router-dom';
import './app.css';

import {refreshAuthToken} from '../actions/auth';
import MyProfile from './my-profile';

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
            <main className="app">
                  {/* <HeaderBar /> */}
                    {/* <div><a href={`/users/myProfile/${this.props.userId}`}>My Profile</a></div>

                    <div><a href="/register">register</a></div>
                    <div><a href="/">login</a></div>
                    <div><a href="/findPlayers">users</a></div>
                    <div><a href="/myGroup">my groups</a></div>
                    <div><a href="/editProfile">edit my profile</a></div>
                    <div><a href="/searchGroups">search groups</a></div> */}
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/userManual" component={UserManual} />
                    <Route exact path="/findPlayers" component={Users} />
                    <Route exact path="/users/:id" component={UserProfile} />
                    <Route exact path="/myGroup" component={MyGroup} />
                    <Route exact path="/groups/:id" component={GroupProfile} />
                    <Route exact path="/editProfile" component={EditProfile} />
                    <Route exact path="/searchGroups" component={SearchGroups} />
                    <Route exact path="/users/myProfile/:id" component={MyProfile} />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    userId: state.auth.currentUser ? state.auth.currentUser._id : null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));