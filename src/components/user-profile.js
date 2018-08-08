import React from 'react';
import {connect} from 'react-redux';
import { fetchOneUser } from '../actions/users';

export class  UserProfile extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneUser(this.props.match.params.id));  
    
  }

  render() {
    console.log(this.props);
    if (this.props.currentUser.games) {
      let username = this.props.currentUser.username;
      // let games = this.props.users.games.map(game => <li>-{game}</li>);
      let games = this.props.currentUser.games;
      console.log(games);
      let gameList = games.map((game,i) => <li key={i}>{game}</li>)

      return (
        <div>
          {username}'s Profile!!!!
          <div><img src="http://placehold.it/500x200" /></div>
          Games: <ul>{gameList}</ul>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}

const mapStateToProps = state => ({
  currentUser: state.userReduce.currentUser
})

export default connect(mapStateToProps)(UserProfile);