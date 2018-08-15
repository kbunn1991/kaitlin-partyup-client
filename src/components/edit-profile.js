import React from 'react';
import {connect} from 'react-redux';
import {fetchOneUser, editMyProfile, deleteGame, deleteTag} from '../actions/users';
import requiresLogin from './requires-login';


export class  EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.profileImage = null;
    this.myGames = null;
    this.myTags = null;
    this.gameId = null;
    this.tagId = null;

  }

  componentDidMount() {
    this.props.dispatch(fetchOneUser(this.props.userId));  
  }

  render() {
  
    
    if (this.props.currentUser) { 
      let games = this.props.currentUser.games;
      let tags = this.props.currentUser.tags;
      let gameList = games ? games.map((game,i) => <li key={i}>{game} - <a href="/editProfile" onClick={() => this.props.dispatch(deleteGame(this.props.userId, game))}>Delete game</a></li>) : [];
      let tagList = tags ? tags.map((tag,i) => <li key={i}>{tag} - <a href="/editProfile" onClick={() => this.props.dispatch(deleteTag(this.props.userId, tag))}>Delete tag</a></li>) : [];


    return (
      <form onSubmit={e => {
        // e.preventDefault();
        this.props.dispatch(editMyProfile(this.props.userId, this.profileImage.value, this.myGames.value, this.myTags.value))}}>
        <label htmlFor="editGames">Profile Image:</label>
        <input type="text" ref={input => this.profileImage = input} /><br />      
        <label htmlFor="editGames">Add a Game:</label>
        <input type="text" ref={input => this.myGames = input} /><br />
        <ul>{gameList}</ul> 
        <label htmlFor="editTags">Add a Tag:</label>
        <input type="text" ref={input => this.myTags = input} /><br />
        <ul>{tagList}</ul> 
        <button type="submit">Submit</button>
      </form>
    )} else {
      return <div></div>
    }
  }

}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
      userId: state.auth.currentUser ? state.auth.currentUser._id : null,
      protectedData: state.protectedData.data,
      users: state.userReduce.users,
      currentUser: state.userReduce.currentUser
    };
};

export default requiresLogin()(connect(mapStateToProps)(EditProfile));
