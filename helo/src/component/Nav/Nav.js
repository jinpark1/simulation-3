import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { username, profilePic } from '../../ducks/reducer';

//Reminder: Returns random text.
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

const icon = () => {
    return makeid();
}

const Nav = () => {
    return (
        <div className="nav">
            {console.log('Nav--------', this.props)}
            <img className="user-icon" src={`https://robohash.org/${icon}.png`} />
            <div>Show user Name</div>
            <Link to="/dashboard" className="link">Home</Link>
            <Link to="/new" className="link">New Post</Link>
            <Link to="/" className="link">Logout</Link>
        </div>
    )
}


const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Nav);

