import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class Dashboard extends Component {
  render() {
   let navbar = this.props.location.pathname != '/' ? <Nav /> : ''
    return (
      <div>
        <Nav/>
        <div className="dashboard">
          <div>Dashboard Component</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
