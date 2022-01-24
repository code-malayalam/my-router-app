import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './Details.css'


export default function Details() {

  const {userId} = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios('/data.json')
        .then((response) => {
            const item = response.data.find((userItem) => userItem.id === parseInt(userId));
            setUser(item);
        });
}, [userId]);
  
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
          <button onClick={() => {
              navigate(-1);
          }}>Done</button>
      </div>
  );
}
