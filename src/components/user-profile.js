import React from 'react';
import {connect} from 'react-redux';
import { fetchOneUser } from '../actions/users';
import requiresLogin from './requires-login';
import NavBar from './nav-bar';
import './user-profile.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'

library.add(faGamepad);
library.add(faUserAlt);
library.add(faTags);

export class  UserProfile extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneUser(this.props.match.params.id));  
  }

  render() {

  
    console.log(this.props);
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      let profileImage = this.props.currentUser.profileImage;
      // let games = this.props.users.games.map(game => <li>-{game}</li>);
      let games = this.props.currentUser.games;
      let tags = this.props.currentUser.tags;
      console.log(games);
      let gameList = games ? games.map((game,i) => <div key={i} className="gameBox">{game}</div>) : [];
      let tagList = tags ? tags.map((tag,i) => <div key={i} className="gameBox">{tag}</div>) : [];

      return (
        <div>
          <NavBar style={{zIndex: 2}}/><br />
          <div className="topCont">
            <div className="userProfilePosition">
              <div className="userProfileImage"><img src={profileImage} /></div>
              <div className="user-name">{username} <FontAwesomeIcon icon="gamepad" /></div> 
            </div>
          </div>
          <div className="bottomCont">

          <div className="sectionHead">
            Game List <FontAwesomeIcon icon="gamepad" />
          </div>
          <div className="listOGames">{gameList}</div>

          <div className="sectionHead">
            Bio <FontAwesomeIcon icon="user-alt" />
            </div>
          <div className="bioBox">
            <div className="bioText">
              {this.props.currentUser.bio}
            </div>
          </div>

          <div className="sectionHead">
            Tags <FontAwesomeIcon icon="tags" />
          </div>
          <div className="listOGames">{tagList}</div>

          </div>
          {/* <div className="curvedBox"></div> */}
          {/* <div className="userImage"><img src={profileImage} /></div><br />
          <div className="user-name">{username}</div>
          Games: <ul>{gameList}</ul> */}
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

export default requiresLogin()(connect(mapStateToProps)(UserProfile));