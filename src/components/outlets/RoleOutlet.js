import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isPathnameValid } from '../../utils/Common';


export default function RoleOutlet() {
    const {pathname} = useLocation();
    const isMatch = isPathnameValid(pathname);

    if (isMatch) {
        return <Outlet />;
    }
    
    return <Navigate to="/" />
}
