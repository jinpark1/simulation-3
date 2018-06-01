import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div>Nav Component</div>
            <Link to="/dashboard" className="link">Home</Link>
            <Link to="/new" className="link">New Post</Link>
            <Link to="/" className="link">Logout</Link>
        </div>
    )
}

export default Nav;

