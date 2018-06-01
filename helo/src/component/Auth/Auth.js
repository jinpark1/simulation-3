import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <div>Auth Component</div>
        <input className="input username" placeholder="username" />
        <input className="input password" placeholder="password" />
      </div>
    );
  }
}

export default Auth;
