import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
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
    </div>
  );
}
