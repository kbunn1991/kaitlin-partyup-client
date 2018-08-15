import React from 'react';
import {connect} from 'react-redux';
import { makeGroup, getMyGroups, fetchGroups, leaveGroup, deleteGroup } from '../actions/groups';
import requiresLogin from './requires-login';

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

  //  joinedGroupList () {
  //    console.log(this.props.groups);
  //   return this.props.groups.filter((item, i) => {
  //   if (item.groupType === 'joined') { 
  //         return (
  //         <li key={i}>{item.groupName} - <a href={`/groups/${item._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(item._id))}>Leave this Group</a></li>
  //       )} 
  //     })
  //   };

  //   createdGroupList () {
  //     console.log(this.props.groups);
  //     return this.props.groups.filter((item, i) => {
  //     if (item.groupType === 'created') { 
  //         return (
  //           <li key={i}>{item.groupName} - <a href={`/groups/${item._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(item._id))}>Leave this Group</a></li>
  //         )}
  //     })
  //   };

  render() {

    let id = this.props.userId;

    // let myGroups = this.props.groups.map((group, i) => 
    //   <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave this Group</a></li>
    // );

    // let myGroups = this.props.groups.filter((group, i) => {
    //   if (group.users.includes(id)) {
    //     return (
    //       <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave this Group</a></li>)
    //   }
    // });

    let myGroups = this.props.groups.filter(group => group.users.includes(id)).map((group, i) => 
      <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave this Group</a></li>
    );

    // let createdGroups = JSON.stringify(this.props.groups.filter((group, i) => {
    //   if (group.userId === id) {
    //     return (
    //       <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(group._id))}>Leave this Group</a></li>)
    //   }
    // }));

    let createdGroups = this.props.groups.filter(group => group.userId === id).map((group, i) => 
      <li key={i}>{group.groupName} - <a href={`/groups/${group._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(deleteGroup(group._id))}>Delete this group</a></li>
    );

    console.log(this.props.groups);
    


// createdGroupsList = this.props.groups.filter((item, i) => (
//       (item.groupType === 'created') ? 
//          (<li key={i}>{item.groupName} - <a href={`/groups/${item._id}`}>View Group</a> - <a href="#" onClick={() => this.props.dispatch(leaveGroup(item._id))}>Leave this Group</a></li>) : null
//       ));

    // console.log(createdGroupsList);

    // console.log(this.props.dispatch(getCreatedGroups(this.props.groups)));

    return (
      <div>
        <h1> Make a Group </h1>
        <form onSubmit={(e) => {
          this.props.dispatch(makeGroup(this.groupName.value, this.game.value, this.tags.value, id, ));
        }}>
          <label htmlFor="chooseGame">Game:</label>
          <input type="text" ref={input => this.game = input} />
          <label htmlFor="groupName">Group Name:</label>
          <input type="text" ref={input => this.groupName = input} />
          <label htmlFor="groupName">Tags:</label>
          <input type="text" ref={input => this.tags = input} />
          <button type="submit">Submit</button>
        </form>
        <h1>My Created Groups</h1>
        <ul>{createdGroups}</ul>
        <h1>My Joined Groups</h1>
        <ul>{myGroups}</ul>
      </div>
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