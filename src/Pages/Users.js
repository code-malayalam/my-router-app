import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './Users.css';
import { Link } from 'react-router-dom';

export default function Users() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios('data.json')
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <div className="page users">
            {data.map((item) => {
                return (
                    <div className="users-item" key={item.id}>
                        <div className="title">
                            <Link to={`/details/${item.id}`}>{item.name}</Link>
                        </div>    
                        <div className="descr">
                            {item.address}
                        </div>    
                    </div>
                );

            })}
        </div>
    )
}
