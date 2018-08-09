import React from 'react';
import {connect} from 'react-redux';
import {fetchOneUser, editMyProfile} from '../actions/users';
import requiresLogin from './requires-login';


export class  EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.profileImage = null;
    this.myGames = null;
    this.myTags = null;

  }

  componentDidMount() {
    this.props.dispatch(fetchOneUser(this.props.userId));  
  }

  render() {
    console.log(this.props.userId);
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.dispatch(editMyProfile(this.props.userId, this.profileImage.value, this.myGames.value, this.myTags.value))}}>
        <label htmlFor="editGames">Profile Image:</label>
        <input type="text" ref={input => this.profileImage = input} /><br />
        <label htmlFor="editGames">My Games:</label>
        <input type="text" ref={input => this.myGames = input} /><br />
        <label htmlFor="editTags">My Tags:</label>
        <input type="text" ref={input => this.myTags = input} /><br />
        <button type="submit">Submit</button>
      </form>
    )
  }

}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
      userId: state.auth.currentUser ? state.auth.currentUser._id : null,
      protectedData: state.protectedData.data,
      users: state.userReduce.users
    };
};

export default requiresLogin()(connect(mapStateToProps)(EditProfile));
