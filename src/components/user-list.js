import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUsers, filterUsers, addToGroup } from '../actions/users';

export class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());  
  }
  
  render() {

    let userList = this.props.users.map((user, i) => 
      <li key={i}>{user.username} - {user.games} - <a href={`/users/${user._id}`}>View User</a> - <div onClick={() => { this.props.dispatch(addToGroup(user._id)); console.log(user._id)}}>add to group!</div></li>
    );

    return (
    <div>
      <h1>Find Players!</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(this.input.value);
        this.props.dispatch(filterUsers(this.input.value));
        console.log(this.props.users);
      }}>
        <label htmlFor="search-games">Game Title:</label>
        <input type="text" name="games" ref={element => this.input = element} />
        <button type="submit">Submit</button>
      </form>

      <ul> {userList} </ul>
    </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
      protectedData: state.protectedData.data,
      users: state.userReduce.users
  };
};

export default requiresLogin()(connect(mapStateToProps)(Users));
// export default connect(mapStateToProps)(Users);