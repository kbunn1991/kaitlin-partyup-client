import React from 'react';
import './user-manual.css';

export default class UserManual extends React.Component {
  render() {
    return (
      <div className="howToUse">
        <h1>How To Use</h1>

        <div className="infoComponent">
          1. Before getting started, please fill out your user profile with the current PS4 games you're playing and any relevant tags (i.e. casual, competitive, girls only, etc).
        </div>

        <div className="infoComponent">
          2. Search through groups using the form on the Search Groups page through the nav. You can choose to search by one, two, or all of the following: Group name, Game title, and group tags. When you find one you like, click that join button!
        </div>

        <div className="infoComponent">
          3. Take a quick visit to the <i>my groups</i> page to view all your killer teams - you can also make your own group!
        </div>

        <div className="infoComponent">
          4. After playing, make sure to find your groupmate via the Find Players feature and leave them an endorsement!
        </div>

        <a href="/findPlayers"><div className="infoComponent2">
          <i>Okay I got it, now take me to the app!</i>
        </div></a>

      </div>
    )
  }
}