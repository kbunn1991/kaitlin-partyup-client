import React from 'react';
import {connect} from 'react-redux';
import { fetchOneUser } from '../actions/users';
import requiresLogin from './requires-login';
import NavBar from './nav-bar';

export class  MyProfile extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneUser(this.props.match.params.id));  
  }

  render() {
    console.log(this.props.username);
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      let games = this.props.currentUser.games;
      console.log(games);
      let gameList = games ? games.map((game,i) => <li key={i}>{game}</li>) : [];

      return (
        <div>
          <NavBar /><br />
          <div>
            {username}'s (my) Profile!!!!
            <div><img src="http://placehold.it/500x200" /></div>
            Games: <ul>{gameList}</ul>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
      userId: state.auth.currentUser._id,
      protectedData: state.protectedData.data,
      currentUser: state.userReduce.currentUser
    };
};

export default requiresLogin()(connect(mapStateToProps)(MyProfile));
