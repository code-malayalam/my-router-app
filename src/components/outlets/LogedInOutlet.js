import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isLoggedIn, isPathnameValid } from '../../utils/Common';


export default function LogedInOutlet() {
    const {pathname} = useLocation();
    const isMatch = isPathnameValid(pathname);
    if(isLoggedIn() && isMatch) {
        return <Outlet />;
    }
    return <Navigate to="/login"/>
}


