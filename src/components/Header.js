import React from "react";
import { useNavigate } from "react-router-dom";
import { clearUserInfo, isLoggedIn } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./outlets/LogedInOutlet";
import PrivateLink from "./links/PrivateLink";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">
                    <PrivateLink to="/">
                        <span> Home </span>
                    </PrivateLink>
                    <PrivateLink to="users">
                        <span> Users </span>
                    </PrivateLink>
                    <PrivateLink to="settings">
                        <span> Settings </span>
                    </PrivateLink>
                    <PrivateLink to="usage">
                        <span> Usage </span>
                    </PrivateLink>
                    <span style={{flexGrow: 1}}/>
                    {
                        isLoggedIn() && <span onClick={() => {
                            clearUserInfo();
                            navigate('login');
                        }}> Logout </span>
                    }
            </div>
            <div>
                <LogedInOutlet />
            </div>
        </div>
    );
}
