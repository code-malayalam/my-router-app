import { Navigate, useMatch, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../utils/Common';

export default function LogedInOutlet({children}) {
    const isLoginPage = !!useMatch('/login');
    if(isLoginPage) {
        if(isLoggedIn()) {
            return <Navigate to="/"/>
        }
        return <Outlet />;

    } 
    if(isLoggedIn()) {
        return <Outlet />;
    }
    return <Navigate to="/login"/>
}
