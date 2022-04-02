
import { saveUserInfo } from '../utils/Common';
import data from './data.json';

const dummyApi = (user) => {
    if(data[user]) {
        return Promise.resolve(data[user].role);
    }
    return Promise.reject("Invalid user")
}

const login = (user) => {
    return dummyApi(user)
        .then((role) => {
            console.log('ROLE', role);
            saveUserInfo({
                user,
                role 
            });
            return {
                status: 'success',
                data: role
            }
        });
}

export {
    login
}