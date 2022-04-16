import React from "react";
import { clearUserInfo } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./outlets/LogedInOutlet";
import PrivateLink from "./links/PrivateLink";

export default function Header() {

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
                    <PrivateLink to="login" className="logout" onClick={() => clearUserInfo()}>
                        <span> Logout </span>
                    </PrivateLink>
            </div>
            <div>
                <LogedInOutlet />
            </div>
        </div>
    );
}

