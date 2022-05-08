import React from 'react';
import { clearUserInfo } from '../utils/Common';
import './Header.css';
import PrivateLink from './links/PrivateLink';
import LogedInOutlet from './outlets/LogedInOutlet';

export default function Header() {
  return (
      <div>
          <div className='header'>
            <PrivateLink to="/">
                <span> Home </span>
            </PrivateLink>
            <PrivateLink to="users">
                <span> Users </span>
            </PrivateLink>
            <PrivateLink to="settings">
                <span> Settings </span>
            </PrivateLink>
            <PrivateLink to="usage">
                <span> Usage </span>
            </PrivateLink>
            <PrivateLink className="logout" to="login" onClick={() => clearUserInfo()}>
                <span> Logout </span>
            </PrivateLink>
        </div>
        <div>
            <LogedInOutlet />
        </div>
      </div>
    
  );
}
