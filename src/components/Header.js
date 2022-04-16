import React from 'react';
import { NavLink } from 'react-router-dom';
import { clearUserInfo } from '../utils/Common';
import './Header.css';
import LogedInOutlet from './outlets/LogedInOutlet';

export default function Header() {
  return (
      <div>
          <div className='header'>
            <NavLink to="/">
                <span> Home </span>
            </NavLink>
            <NavLink to="users">
                <span> Users </span>
            </NavLink>
            <NavLink to="settings">
                <span> Settings </span>
            </NavLink>
            <NavLink to="usage">
                <span> Usage </span>
            </NavLink>
            <NavLink className="logout" to="login" onClick={() => clearUserInfo()}>
                <span> Logout </span>
            </NavLink>
        </div>
        <div>
            <LogedInOutlet />
        </div>
      </div>
    
  );
}
