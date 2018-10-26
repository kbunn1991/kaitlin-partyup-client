import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUsers, filterUsers } from '../actions/users';
import NavBar from './nav-bar';
import './user-list.css';

export class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers());  
  }
  
  render() {
    // <div onClick={() => { this.props.dispatch(addToGroup(user._id)); console.log(user._id)}}>add to group!</div>
    let userList = this.props.users.map((user, i) => 
      <li key={i}><div className="userImage"><img src={user.profileImage}></img></div> <div className="userInfo"><a href={`/users/${user._id}`} className="userName">{user.username}</a> <div className="userGames"><ul>{user.games.map((game,i) => <li key={i}><span>{game}&nbsp;</span></li>)}</ul></div> </div></li>
    );

    return (
    <section>
      <NavBar style={{zIndex:100}} />

      <div className="findPlayersImage">

        <div className="textBg">
          <div className="findPlayersText">Find Players</div>
        </div>
      

         <div className="findForm">
          <form onChange={(e) => {
          e.preventDefault();
          this.props.dispatch(filterUsers(this.input.value));
          }}>
          <div className="position">
            <label htmlFor="search-games">Search Groups: </label>
            <input type="text" name="games" ref={element => this.input = element} placeholder="search users by game!"/>
          </div>
          </form>
        </div>
          
        <div className="userList">
          <ul> {userList} </ul>
        </div>

      </div>

    </section>
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