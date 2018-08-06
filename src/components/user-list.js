import React from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from '../actions/users';

export class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());  
  }
  
  render() {
    let userList = this.props.users.map(user => <li>{user}</li>);

    return (
    <ul> {userList} </ul>
    ) 
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Users);