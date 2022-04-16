import React from "react";
import { useNavigate } from "react-router-dom";
import { clearUserInfo } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./outlets/LogedInOutlet";
import LoggedInMenuItem from "./LoggedInMenuItem";
import LoginLink from "./links/LoginLink";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">
                <LoggedInMenuItem>
                    <LoginLink to="/">
                        <span> Home </span>
                    </LoginLink>
                    <LoginLink to="users">
                        <span> Users </span>
                    </LoginLink>
                    <LoginLink to="settings">
                        <span> Settings </span>
                    </LoginLink>
                    <LoginLink to="usage">
                        <span> Usage </span>
                    </LoginLink>
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
