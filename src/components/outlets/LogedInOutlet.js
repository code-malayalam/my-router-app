import { Navigate, useMatch, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../../utils/Common';
import RoleOutlet from './RoleOutlet';

export default function LogedInOutlet() {
    const isLoginPage = !!useMatch('/login');

    if(isLoginPage) {
        if(isLoggedIn()) {
            return <Navigate to="/"/>
        }
        return <Outlet />;

    } 
    if(isLoggedIn()) {
        return <RoleOutlet />;
    }
    return <Navigate to="/login"/>
}


