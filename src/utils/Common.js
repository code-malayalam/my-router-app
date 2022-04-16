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

export {
    testFn,
    saveUserInfo,
    clearUserInfo,
    isLoggedIn

}

export default testObj;
