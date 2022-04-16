import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { getRolesForPath, isLoggedIn, isRouteRoleMatches } from '../../utils/Common'
import routeConfig from '../../utils/route-config-main.json';

export default function LoginLink(props) {
    const to = props.to;
    const path = useResolvedPath(to);
    const roles = getRolesForPath(path.pathname, routeConfig);
    const isMatch = isRouteRoleMatches(roles);

    return (
        isLoggedIn() && isMatch && <NavLink {...props}/>
    )
}
