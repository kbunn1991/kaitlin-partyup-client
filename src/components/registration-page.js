import React from 'react';

export default function Register (props) {
  return (
    <div>
      <h1>Welcome to Party Up!</h1>
      <h3>Please register</h3>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password"></input>
        <button type="submit">Register</button>
      </form>

      <div>Already have an account? Please <a href="/login">log in</a></div>
    </div>
  )
}