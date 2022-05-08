import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { isLoggedIn, isPathAllowed } from '../../utils/Common'

export default function PrivateLink(props) {
    const to = props.to;
    const path = useResolvedPath(to);

    const isMatch = isPathAllowed(path.pathname);

    return (
        isLoggedIn() && isMatch && <NavLink {...props}/>
    )
}
