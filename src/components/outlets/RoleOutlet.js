import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getRolesForPath, isRouteRoleMatches } from '../../utils/Common';
import routeConfig from '../../utils/route-config-main.json';

export default function RoleOutlet() {
    const {pathname} = useLocation();
    const roles = getRolesForPath(pathname, routeConfig);
    const isMatch = isRouteRoleMatches(roles);

    if (isMatch) {
        return <Outlet />;
    }
    
    return <Navigate to="/" />
}
