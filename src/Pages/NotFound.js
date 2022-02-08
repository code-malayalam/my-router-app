import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
      <div className='page'>
          Sorry, Page Not Found
          <div>
            <Link to="/">Go Home</Link>
          </div>
      </div>
  );
}
