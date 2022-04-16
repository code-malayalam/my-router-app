import React, { useState } from 'react'
import { login } from '../api/users';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
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
