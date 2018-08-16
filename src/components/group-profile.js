import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchOneGroup } from '../actions/groups';
import './group-profile.css';

export class  GroupProfile extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneGroup(this.props.match.params.id));  
  }

  render() {
    // console.log(this.props.currentGroup);
    if (this.props.currentGroup) {


    console.log(this.props.currentGroup.game);

    let bgImg = (this.props.currentGroup.game === "Bloodborne") ? "topContBloodborne" : (this.props.currentGroup.game === "Overwatch") ? "topContDva" : (this.props.currentGroup.game === "Bioshock") ? "topContBioshock" : (this.props.currentGroup.game === "Battlefront") ? "topContBattlefront" : ""

    console.log(bgImg);

      let groupName = this.props.currentGroup.groupName;
      // let games = this.props.users.games.map(game => <li>-{game}</li>);
      let game = this.props.currentGroup.game;
      console.log(game);
      // let gameList = games ? games.map((game,i) => <li key={i}>{game}</li>) : [];

      return (
        <div>
          <div className={bgImg}>
          </div>
          {groupName}'s Profile!!!!
          <div><img src="http://placehold.it/100x100" /></div>
          Game: <ul>{game}</ul>
        </div>
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
      userId: state.auth.currentUser ? state.auth.currentUser._id : null
  };
};

export default requiresLogin()(connect(mapStateToProps)(GroupProfile));