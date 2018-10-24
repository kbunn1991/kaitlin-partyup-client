import React from 'react';
import {connect} from 'react-redux';
import {fetchOneUser, editMyProfile, deleteGame, deleteTag} from '../actions/users';
import requiresLogin from './requires-login';
import './edit-profile.css';
import NavBar from './nav-bar';

export class  EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.profileImage = null;
    this.bio = null;
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
      let gameList = games ? games.map((game,i) => <li key={i}>{game}  <a href="/editProfile" aria-label="Delete Game" onClick={() => this.props.dispatch(deleteGame(this.props.userId, game))}>✘</a></li>) : []; 
      let tagList = tags ? tags.map((tag,i) => <li key={i}>{tag}  <a href="/editProfile" aria-label="Delete Tag" onClick={() => this.props.dispatch(deleteTag(this.props.userId, tag))}>✘</a></li>) : [];


    return (
      <main className="editCont">
        <NavBar />
        <div className="editCont">

          <div className="profileIconCon">
            <div className="editText">editing profile</div>
          </div>

          <div className="edit-form">
            <form onSubmit={e => {
              e.preventDefault();
              this.props.dispatch(editMyProfile(this.props.userId, this.profileImage.value, this.bio.value, this.myGames.value, this.myTags.value))
              .then(() => {
                  this.props.history.push(`/users/${this.props.userId}`);
                  console.log('redirect');
                })
              }}>
              <label htmlFor="editImage">Profile Image:</label>
              <div className="inputWrapper">
                <input type="text" aria-label="Edit Profile Image" id="editImage" ref={input => this.profileImage = input} placeholder="http//..." /><br />      
              </div>
              <label htmlFor="editBio">Bio:</label>
              <div className="inputWrapper">
                <input type="text" aria-label="Edit Biography" id="editBio" ref={input => this.bio = input} placeholder="short about me..." /><br />      
              </div>
              <label htmlFor="addGame">Add a Game:</label>
              <div className="inputWrapper">
                <input type="text" aria-label="Add a Game" ref={input => this.myGames = input} placeholder="" id="addGame" /><br />
                <ul>{gameList}</ul> 
              </div>
              <label htmlFor="addTag">Add a Tag:</label>
              <div className="inputWrapper">
                <input type="text" aria-label="Add a Tag" ref={input => this.myTags = input} placeholder="" id="addTag" /><br />
                <ul>{tagList}</ul> 
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
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
