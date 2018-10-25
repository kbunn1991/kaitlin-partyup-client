import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import HeaderBar from './header-bar';

import LoginForm from './login-page';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/findPlayers" />;
    }

    return (
        <section className="home">
            <HeaderBar />
            <LoginForm />
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);