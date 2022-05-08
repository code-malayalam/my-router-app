import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, useLocation, Outlet} from 'react-router-dom';
import PrivateLink from '../components/links/PrivateLink';
import './Details.css'



export default function Details() {

  const location = useLocation();
  const state = location.state || {};

  const {userId} = useParams();

  const [user, setUser] = useState(state.data);

  const navigate = useNavigate();


  useEffect(() => {
    if(!user) {
        axios('/my-router-app/data.json')
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
          <div className="sub-menu">
                <PrivateLink to="" end><span> Marks </span> </PrivateLink>
                <PrivateLink to="sports"><span> Sports </span> </PrivateLink>
                <PrivateLink to="remarks"><span> Remarks </span> </PrivateLink>
          </div>
          <div className="details-body">
            <Outlet context={user}/>
          </div>
          <div>
              <button onClick={() => {
                navigate('/users');
              }}>BACK</button>
          </div>
      </div>
  );
}
