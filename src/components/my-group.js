import React from 'react';
import {connect} from 'react-redux';
import {getMyGroup, addToGroup} from '../actions/users';

export class MyGroup extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getMyGroup(this.props.users));  
  };

  render() {

    let groupList = this.props.users.map((user, i) => 
      <li key={i}>{user.username} - {user.games} - <div onClick={() => { this.props.dispatch(addToGroup(user._id)); console.log(user._id)}}>remove from group!</div></li>
    );

    return (
      <div>
        <h1>My Current Group</h1>
        <ul>{groupList}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(MyGroup);