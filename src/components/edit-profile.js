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
      let gameList = games ? games.map((game,i) => <li key={i}>{game}  <a href="/editProfile" onClick={() => this.props.dispatch(deleteGame(this.props.userId, game))}></a></li>) : []; 
      let tagList = tags ? tags.map((tag,i) => <li key={i}>{tag}  <a href="/editProfile" onClick={() => this.props.dispatch(deleteTag(this.props.userId, tag))}></a></li>) : [];


    return (
      <div className="editCont">
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
              <label htmlFor="editGames">Profile Image:</label>
              <div className="inputWrapper">
                <input type="text" ref={input => this.profileImage = input} placeholder="http//..." /><br />      
              </div>
              <label htmlFor="editGames">Bio:</label>
              <div className="inputWrapper">
                <input type="text" ref={input => this.bio = input} placeholder="short about me..." /><br />      
              </div>
              <label htmlFor="editGames">Add a Game:</label>
              <div className="inputWrapper">
                <input type="text" ref={input => this.myGames = input} placeholder="" /><br />
                <ul>{gameList}</ul> 
              </div>
              <label htmlFor="editTags">Add a Tag:</label>
              <div className="inputWrapper">
                <input type="text" ref={input => this.myTags = input} placeholder="" /><br />
                <ul>{tagList}</ul> 
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
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
