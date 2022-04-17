import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { isLoggedIn, isPathnameValid } from '../../utils/Common'

export default function PrivateLink(props) {
    const to = props.to;
    const path = useResolvedPath(to);
    const isMatch = isPathnameValid(path.pathname);

    return (
        isLoggedIn() && isMatch && <NavLink {...props}/>
    )
}
