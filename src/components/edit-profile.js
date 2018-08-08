import React from 'react';
import {connect} from 'react-redux';

export class  EditProfile extends React.Component {

  render() {
    return (
      <form>
        <label htmlFor="editGames">Profile Image:</label>
        <input type="text" /><br />
        <label htmlFor="editGames">My Games:</label>
        <input type="text" /><br />
        <label htmlFor="editTags">My Tags:</label>
        <input type="text" /><br />
        <button type="submit">Submit</button>
      </form>
    )
  }

}

const mapStateToProps = state => ({
  users: state.userReduce.users
})

export default connect(mapStateToProps)(EditProfile);