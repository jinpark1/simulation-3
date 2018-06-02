import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { username, id, profilePic } from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            user: null,
            message: null,
            showRegister: false,
            fetchedDataMessaage: null
        }
    };

    getMessage = error => error.response
    ? error.response.data
      ? error.response.data.message
      : JSON.stringify(error.response.data, null, 2)
    : error.message;
    
    register = () => {
        this.setState({ message: null });
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        axios.post('/register', {
          username,
          password
        }).then(response => {
          this.setState({ user: response.data });
        }).catch(error => {
          this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
        });
      };

      login = () => {
          this.setState({ message: null });
          const username = this.refs.username.value;
          const password = this.refs.password.value;
          axios.post('/login', {
              username,
              password
          }).then(response => {
              this.setState({ user: response.data });
          }).catch(error => {
              this.setState({ message: 'Something went wrong' + this.getMessage(error) });
          });
      };


    render() {
        return (
         <div className="auth">
         <div>Auth Component</div>
         <input className="input username" placeholder="username" ref="username" />
         <input className="input password" placeholder="password" ref="password" />
         <a href='#' onClick={this.register}>Register</a>
         <a href='#' onClick={this.login}>Login</a>
         </div>
         );
    }
}

export default connect(null, { id, username, profilePic })(Auth);
