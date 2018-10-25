import React from 'react';
import {connect} from 'react-redux';
import { makeGroup, getMyGroups, fetchGroups, leaveGroup, deleteGroup } from '../actions/groups';
import requiresLogin from './requires-login';
import NavBar from './nav-bar';
import './my-group.css';

export class MyGroup extends React.Component {
  constructor(props) {
    super(props)

    this.game = null;
    this.groupName = null;
    this.createdGroups = null;
    this.joinedGroups = null;

  }
  componentDidMount() {
    this.joinedGroups = this.props.dispatch(fetchGroups(this.props.groups)); 
  };

  render() {

    let id = this.props.userId;

    let myGroups = this.props.groups.filter(group => group.users.includes(id)).map((group, i) => 
      <li key={i}>
        <table>
          <td className="gName">{group.groupName}</td>
          <td>
            <div className="buttons">
              <a href={`/groups/${group._id}`}>View</a> &nbsp;|&nbsp;&nbsp;
              <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave</a>
            </div>
          </td>
        </table>
      </li>
    );


    let createdGroups = this.props.groups.filter(group => group.userId === id).map((group, i) => 
      <li key={i}><table><td className="gName">{group.groupName}</td>
      <td>
        <div className="buttons">
          <a href={`/groups/${group._id}`}>View</a> &nbsp;|&nbsp;&nbsp; 
          <a href="#" onClick={() => this.props.dispatch(deleteGroup(group._id))}>Delete</a>
        </div></td></table>
      </li>
    );

    console.log(this.props.groups);
    
    return (
      <section className="myGroups">
        <NavBar /><br />
        <div className="groupCon">
          <div className="groupText">Make a Group</div>
        </div>
        <form onSubmit={(e) => {
          this.props.dispatch(makeGroup(this.groupName.value, this.game.value, this.tags.value, id, ));
        }}>
          <div className="formSection">
            <label htmlFor="chooseGame">Game:</label>
            <input type="text" ref={input => this.game = input} placeholder="game title"/>
          </div>
          <div className="formSection">
            <label htmlFor="groupName">Group Name:</label>
            <input type="text" ref={input => this.groupName = input} placeholder="group name"/>
          </div>
          <div className="formSection">
            <label htmlFor="groupName">Tags:</label>
            <input type="text" ref={input => this.tags = input} placeholder="group tags"/>
          </div>
          <button type="submit">Submit</button>
        </form>


        <div className="groupHeader">My Created Groups</div>
        <ul>{createdGroups}</ul>

        <div className="groupHeader">My Joined Groups</div>
        <ul>{myGroups}</ul>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
      protectedData: state.protectedData.data,
      groups: state.groupReduce.groups,
      userId: state.auth.currentUser ? state.auth.currentUser._id : null
  };
};

export default requiresLogin()(connect(mapStateToProps)(MyGroup));