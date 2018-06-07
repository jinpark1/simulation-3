import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { username } from '../../ducks/reducer';
import { Link } from 'react-router-dom';



class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: null,
            pass: '',
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
        const username = this.state.username;
          const password = this.state.pass;
        axios.post('/register', {
            username,
            password
          }).then(response => {
          console.log(response.data)
        }).catch(error => {
          this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
        });
      };

      login = () => {
          this.setState({ message: null });
          const username = this.state.username;
          const password = this.state.pass;
          axios.post('/login', {
              username,
              password
            }).then(response => {
                this.props.history.push('/dashboard')
          }).catch(error => {
              this.setState({ message: 'Something went wrong' + this.getMessage(error) });
          });
      };

      updateUser = (e) => {
        if(e.target.name === "username"){
            this.setState({
                username: e.target.value
            }) 
        } 
        if (e.target.name === "password"){
            this.setState({
                pass: e.target.value 
            })
        }
      }


    render() {
        console.log('props', this.props)
        return (
         <div className="auth">
         <div>Auth Component</div>
         <input className="input username" placeholder="username" onChange={this.updateUser} name="username" />
         <input className="input password" placeholder="password" onChange={this.updateUser} name="password" />
         <a href='#' onClick={this.register}>Register</a>
         <button to='/dashboard' onClick={ this.login } >Login</button>
         </div>
         );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = { username } 

export default connect(mapStateToProps, { username })(Auth);
