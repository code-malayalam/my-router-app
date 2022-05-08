import routeConfig from './route-config-main.json';
import { matchPath } from 'react-router-dom';

const testFn = () => {
    console.log('Hello world');
}

const testObj = {
    key1: 'value1',
    key2: 'value2'
};

const saveUserInfo = (data) => {
    localStorage.setItem("cred", JSON.stringify(data));
}

const clearUserInfo = () => {
    localStorage.removeItem("cred")
}

const isLoggedIn = () => {
    
    try {
        const val = JSON.parse(localStorage.getItem('cred'));
        return !!val;
    } catch {
        return false;
    }
}

const getRolesForPath = (pathname) => {
    for (const [path, obj] of Object.entries(routeConfig)) {
        if(matchPath(path, pathname)) {
            return obj.roles;
        }
    }
    return null;
}

const getRoles = () => {
    try {
        const val = JSON.parse(localStorage.getItem('cred')) || {};
        const roles = val.role || []; 
        return roles;
    } catch {
        return []
    }
}

const isRouteRoleMatches = (roles) =>  {
    if(!roles) {
        return true;
    }

    const userRoles = getRoles();
    const filtered = roles.filter((item) => userRoles.includes(item));

    return !!filtered.length

}

const isPathAllowed = (pathname) => {
    const roles = getRolesForPath(pathname);
    return isRouteRoleMatches(roles);
}

export {
    testFn,
    saveUserInfo,
    clearUserInfo,
    isLoggedIn,
    isPathAllowed

}

export default testObj;
