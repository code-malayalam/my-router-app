import { matchPath } from 'react-router-dom';
const testFn = () => {
    console.log('Hello world');
}

const testObj = {
    key1: 'value1',
    key2: 'value2'
};

const isLoggedIn = () => {
    try {
        const val = JSON.parse(localStorage.getItem('cred'))
        return !!val;
    } catch {
        return false
    }
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

const isUserValidForRole = (role) => {
    const arr = getRoles();
    return arr.indexOf(role) !== -1;
}

const saveUserInfo = (data) => {
    localStorage.setItem("cred", JSON.stringify(data));
}

const clearUserInfo = () => {
    localStorage.removeItem("cred")
}

function isRouteRoleMatches(roles) {
    if(!roles) {
        return true;
    }
    const  myRoles = getRoles();
    const filtered = roles.filter((item) => myRoles.includes(item));
    return !!filtered.length;
}

function getRolesForPath(pathname, routeConfig) {
    for (const [path, obj] of Object.entries(routeConfig)) {
        if(matchPath(path, pathname)) {
            return obj.roles;
        }
    }
    return null;
}

export {
    testFn,
    isLoggedIn,
    getRoles,
    isUserValidForRole,
    saveUserInfo,
    clearUserInfo,
    getRolesForPath,
    isRouteRoleMatches
}

export default testObj;
