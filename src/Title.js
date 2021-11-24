import { NavLink } from 'react-router-dom';

import React from 'react';
import './Title.css';

function Title() {
    return (
      <div className="background">
        <header>
          <title>First_React</title>
          <h1 className="Title">Ant's SFPOPOS</h1>
          <h3 className="Title-Subtitle">Dahveyea's San Francisco Privately Owned Public Open Spaces</h3>
  
          <div className="nav-link">
            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                exact to="/">List</NavLink>

            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                to="/about">About</NavLink>
          </div>
  
        </header>
      </div>
    )
  }

export default Title