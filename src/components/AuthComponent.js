import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLoggedIn, isUserValidForRole } from '../utils/Common'


export default function AuthComponent({children, whenLoggedIn = true, role = []}) {
    if(whenLoggedIn) {
        if(isLoggedIn()) {
            if(isUserValidForRole(role)) {
                return children;
            }
            return <Navigate to='/'/>
        }
        return <Navigate to="login"/>;
    } 
    if(isLoggedIn()) {
        return <Navigate to="/"/>;
    } 
    return children;
}
