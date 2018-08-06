import React from 'react';

export default function Login (props) {
  return (
    <div>
      <h1>Welcome to Party Up!</h1>
      <h3>Log in</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password"></input>
        <button type="submit">Log In</button>
      </form>
      <div>Don't have an account? Please <a href="#home">register</a>.</div>

    </div>
  )
}