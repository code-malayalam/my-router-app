import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { clearUserInfo } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./LogedInOutlet";
import LoggedInMenuItem from "./LoggedInMenuItem";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">
                <LoggedInMenuItem>
                    <NavLink to="/">
                        <span> Home </span>
                    </NavLink>
                    <NavLink to="users">
                        <span> Users </span>
                    </NavLink>
                    <NavLink to="settings">
                        <span> Settings </span>
                    </NavLink>
                    <NavLink to="usage">
                        <span> Usage </span>
                    </NavLink>
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
