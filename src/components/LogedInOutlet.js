import { Navigate, useMatch, Outlet, useLocation } from 'react-router-dom';
import { isLoggedIn, getRolesForPath, isRouteRoleMatches } from '../utils/Common';
import routeConfig from '../utils/route-config-main.json';

export default function LogedInOutlet() {
    const isLoginPage = !!useMatch('/login');
    // const {pathname} = useLocation();

    // const route = matchPath('*', pathname);

    // console.log(route);

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


function RoleOutlet() {
    const {pathname} = useLocation();
    const roles = getRolesForPath(pathname, routeConfig);
    const isMatch = isRouteRoleMatches(roles);

    if (isMatch) {
        return <Outlet />;
    }
    
    return <Navigate to="/" />
}




