import React, { useEffect, useState, memo } from "react";
import Navbar from "./Navbar"
import { Link, useLocation } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import {logo} from '../assets/logo'
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const isLogin = location?.state?.isLogin

    useEffect(() => {
    }, [isSticky]);
   
    return (
        <>
            <header id="header" className={isSticky ? "sticky" : ""}>
                <div className="navb">
                    {/* <div className="overlay" /> */}
                    <a to="/" className="navbar-title">
                        <img src={logo}></img>               
                    </a>
                    <nav className="nav_actions">
                        <Navbar />
                    </nav>
                    <div className="user-dropdown">
                        <UserDropdown />
                    </div>
                    {/* {isLogin || JSON.parse(localStorage.getItem("userDataUser"))?.token ?
                        <UserDropdown />
                        : <Link to="/login">
                            <div className="btn">Login</div>
                        </Link>
                    }  */}
                </div>
            </header>
        </>
    );
};

export default memo(Header);
