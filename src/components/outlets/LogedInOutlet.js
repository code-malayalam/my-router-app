import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/Common';
import RoleOutlet from './RoleOutlet';

export default function LogedInOutlet() {
    if(isLoggedIn()) {
        return <RoleOutlet />;
    }
    return <Navigate to="/login"/>
}


