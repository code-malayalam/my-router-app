import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { isPathAllowed } from '../../utils/Common';

export default function PrivateLink(props) {
    const to = props.to;
    const path = useResolvedPath(to);
    console.log(path.pathname);
    const isAllowed = isPathAllowed(path.pathname);
    return isAllowed && <NavLink {...props}/>
  
}
