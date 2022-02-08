import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import './Details.css'


export default function Details() {

  const location = useLocation();
  const state = location.state || {};

  const {userId} = useParams();

  const [user, setUser] = useState(state.data);

  const navigate = useNavigate();

  


  console.log(location);    

  useEffect(() => {
    if(!user) {
        axios('/data.json')
        .then((response) => {
            const item = response.data.find((userItem) => userItem.id === parseInt(userId));
            setUser(item);
        });
    }
}, [userId, user]);

if(!user) {
    return null;
}
  
  return (
      <div className="page details">
          <div className="title">
              {user.name}
          </div>
          <div className="body">
              Address {user.address}
          </div>
          <div className="body">
              Phone: {user.phone}
          </div>
          <div className="body">
              Class: {user.class}
          </div>
          <div>
              <button onClick={() => {
                navigate(-1);
              }}>BACK</button>
          </div>
      </div>
  );
}
