import React from "react";
import { useNavigate } from "react-router-dom";
import { clearUserInfo } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./outlets/LogedInOutlet";
import LoggedInMenuItem from "./LoggedInMenuItem";
import PrivateLink from "./links/PrivateLink";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">
                <LoggedInMenuItem>
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
                    <span onClick={() => {
                        clearUserInfo();
                        navigate('login');
                    }}> Logout </span>
                </LoggedInMenuItem>   
            </div>
            <div>
                <LogedInOutlet />
            </div>
        </div>
    );
}
