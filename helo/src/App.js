import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';
import Post from './component/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
        <Form />
        <Nav />
        <Post />
        
      </div>
    );
  }
}

export default App;
