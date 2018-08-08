import React from 'react';
import {connect} from 'react-redux';
import { fetchGroups, filterGroups } from '../actions/groups';

export class SearchGroups extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchGroups());  
  }
  
  render() {

    let groupList = this.props.groups.map((group, i) => 
      <li key={i}>{group.groupName} - <a href="#" onClick={() => console.log('clicked!')}>Join this group!</a></li>
    );
    // <div onClick={() => { this.props.dispatch(addToGroup(user._id)); console.log(user._id)}}>join group!</div>

    return (
    <div>
      <h1>Find A Group!</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(this.input.value);
        this.props.dispatch(filterGroups(this.input.value));
        console.log(this.props.users);
      }}>
        <label htmlFor="search-games">Game Title:</label>
        <input type="text" name="games" ref={element => this.input = element} />
        <button type="submit">Submit</button>
      </form>

      <ul> {groupList} </ul>
    </div>
    ) 
  }
}

const mapStateToProps = state => ({
  groups: state.groupReduce.groups
})

export default connect(mapStateToProps)(SearchGroups);