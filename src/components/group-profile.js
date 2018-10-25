import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchOneGroup } from '../actions/groups';
import './group-profile.css';
import NavBar from './nav-bar';

export class  GroupProfile extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneGroup(this.props.match.params.id));  
  }

  userGroup() {
    console.log(this.props.currentGroup.users);
    if (this.props.currentGroup !== null) {
      if (this.props.currentGroup.users !== undefined) {
        return this.props.currentGroup.users.map((user, i) => (
          <li key={i}> <div className="userImage"><img src={user.profileImage} alt="user's profile image"></img></div> <div className="userInfo"><a href={`/users/${user._id}`} className="userName">{user.username}</a></div>
          
          <div className="biotext">{user.bio}</div> </li>
        ))
      }
    } else {
      return <h3>loading</h3>
    }
  }

  render() {

    if (this.props.currentGroup) {

    let bgImg = (this.props.currentGroup.game === "Bloodborne") ? "topContBloodborne" : (this.props.currentGroup.game === "Overwatch") ? "topContDva" : (this.props.currentGroup.game === "Bioshock") ? "topContBioshock" : (this.props.currentGroup.game === "Battlefront") ? "topContBattlefront" : ""

    // console.log(bgImg);

      let groupName = this.props.currentGroup.groupName;
      // let games = this.props.users.games.map(game => <li>-{game}</li>);
      let game = this.props.currentGroup.game;
      // console.log(game);
      // let gameList = games ? games.map((game,i) => <li key={i}>{game}</li>) : [];

      return (
        <section className="groupProf">
          <NavBar />
          <div className={bgImg}>
            <div className="groupName">{groupName}</div>
            <div className="game">A {game} group</div>
          </div>
          <ul>{this.userGroup()}</ul>
          
        </section>
      )
    } else {
      return <div></div>
    }
  }

}

const mapStateToProps = state => {
  return {
      protectedData: state.protectedData.data,
      currentGroup: state.groupReduce.currentGroup,
      userId: state.auth.currentUser ? state.auth.currentUser._id : null,
  };
};

export default requiresLogin()(connect(mapStateToProps)(GroupProfile));