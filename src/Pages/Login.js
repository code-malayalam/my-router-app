import React, { useState } from 'react'
import { login } from '../api/users';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const handleOnClick = () => {
        login(user)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                console.log('Error');
            });
        
    };

    return (
        <div>
        <div className="page login">
            <div>
                <input value={user} placeholder="username" onChange={(evt) => setUser(evt.target.value)}/>
                <input placeholder="password" />
                <button onClick={handleOnClick}>Login</button>
            </div>
        </div>
        </div>
    )
}
