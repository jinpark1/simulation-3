import React, { Component } from 'react';
import Nav from '../Nav/Nav'
class Form extends Component {
  render() {
    let navbar = this.props.location.pathname != '/' ? <Nav /> : ''
    return (
      <div>
      <Nav/>
      <div className="form">
        <div>Form Component</div>
      </div>
      </div>
    );
  }
}

export default Form;
