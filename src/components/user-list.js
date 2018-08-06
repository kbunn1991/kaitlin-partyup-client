import React from 'react';
import {connect} from 'react-redux';
import { fetchUsers, filterUsers } from '../actions/users';

export class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());  
  }
  
  render() {

    let userList = this.props.users.map((user, i) => <li key={i}>{user.username} - {user.games}</li>);
    // let userList = this.props.users;

    // if (this.props.users === Array) {
    //   userList = this.props.users.map((user, i) => <li key={i}>{user.username} - {user.games}</li>);
    // }
    // if (typeof this.props.users === 'object') {
    //   userList = <li>{this.props.users.username} - {this.props.users.games}</li>;
    // } 

    return (
    <div>
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

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Users);