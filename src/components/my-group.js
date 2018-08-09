import React from 'react';
import {connect} from 'react-redux';
import { makeGroup, getMyGroups, leaveGroup } from '../actions/groups';
import requiresLogin from './requires-login';

export class MyGroup extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getMyGroups(this.props.groups));  
  };

  render() {


    let groupList = this.props.groups.map((group, i) => 
      <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave this Group</a></li>
    );

    console.log(this.props.groups)

    return (
      <div>
        <h1> Make a Group </h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(this.input.value);
          this.props.dispatch(makeGroup(this.input.value));
          console.log(this.props.groups);
        }}>
          <label htmlFor="chooseGame">Game:</label>
          <input type="dropdown" />
          <label htmlFor="groupName">Group Name:</label>
          <input type="text" ref={element => this.input = element} />
          <button type="submit">Submit</button>
        </form>
        <h1>My Created Groups</h1>
        <ul>{groupList}</ul>
        <h1>My Joined Groups</h1>
        <ul>{groupList}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      protectedData: state.protectedData.data,
      groups: state.groupReduce.groups  };
};

export default requiresLogin()(connect(mapStateToProps)(MyGroup));