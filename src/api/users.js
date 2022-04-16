
import { saveUserInfo } from '../utils/Common';
import data from './data.json';


const dummyApi = (user) => {
    if(data[user]) {
        return Promise.resolve(data[user].role);
    }
    return Promise.reject("Invalid user");
}


const login = (username, password) => {
    return dummyApi(username, password)
        .then((role) => {
            saveUserInfo({
                username,
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

