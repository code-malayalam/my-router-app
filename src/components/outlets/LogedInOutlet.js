import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../../utils/Common';

export default function LogedInOutlet() {
    if(isLoggedIn()) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />
    }
    
}

