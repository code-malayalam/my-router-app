import React, { useState } from 'react'
import { login } from '../api/users';
import { Navigate, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/Common';

export default function Login() {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    if(isLoggedIn()) {
        return <Navigate to="/"/>;
    }

    const handleOnClick = () => {
        setError('');
        login(user)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                console.log('Error');
                setError('Login failed')
            });
        
    };

    return (
        <div>
        <div className="page login">
            <div>
                <label className="error">{error}</label>
                <input value={user} placeholder="username" onChange={(evt) => setUser(evt.target.value)}/>
                <input placeholder="password" />
                <button className="login-button" onClick={handleOnClick}>Login</button>
            </div>
        </div>
        </div>
    )
}
