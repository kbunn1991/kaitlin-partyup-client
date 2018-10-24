import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchGroups, filterGroups, joinGroup } from '../actions/groups';
import NavBar from './nav-bar';
import './search-groups.css';

export class SearchGroups extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchGroups());  
  }
  
  render() {

    let groupList = this.props.groups.map((group, i) => 
      <li key={i}><a href={`/groups/${group._id}`}><div className="groupName">{group.groupName}</div></a> 
      <div className="groupGame">&ensp;{group.game}</div>
      <div className="groupInfo">{group.info}</div>
      
      <div className="joinGroup"><a href="#" onClick={() => this.props.dispatch(joinGroup(group._id))}>Join this group!</a></div></li>
    );
    // <div onClick={() => { this.props.dispatch(addToGroup(user._id)); console.log(user._id)}}>join group!</div>

    return (
    <div>
      <NavBar style={{zIndex:100}} />
      <div className="findGroupsImage">

        <div className="textBg">
          <div className="findGroupsText">Find A Group</div>
        </div>

        <form className="findGroupForm"
        onSubmit={(e) => {
        e.preventDefault();
        this.props.dispatch(filterGroups(this.groupName.value, this.game.value, this.tags.value));
        console.log(this.props.users);
      }}>
        <label htmlFor="search-games-group">Group Name:</label>
        <input type="text" id="search-games-group" aria-label="Search games by group" name="games" ref={element => this.groupName = element} placeholder="search by group name" />
        <label htmlFor="search-games-title">Game:</label>
        <input type="text" id="search-games-title" aria-label="Search games by title" name="games" ref={element => this.game = element} placeholder="search by game title"/>
        <label htmlFor="search-games-tag">Tag:</label>
        <input type="text" id="search-games-tag" aria-label="Search games by tags" name="games" ref={element => this.tags = element} placeholder="search by game tags"/>
        <button type="submit">Submit</button>
      </form>
      </div>
      
      <div className="groupList">
        <ul> {groupList} </ul>
      </div>

    </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
      protectedData: state.protectedData.data,
      groups: state.groupReduce.groups
    };
};

export default requiresLogin()(connect(mapStateToProps)(SearchGroups));
