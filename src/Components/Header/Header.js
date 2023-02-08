import React from "react";
import './Header.css';

const Header = () => {
    return(
        <div className="header-container flexRowCenter">
            <div className="message flexRowCenter">
                <p className="font-bold"> Make MyNews your homepage</p>
                <p className="font-light"> Every day discover what's trending on the internet!</p>
            </div>
            <div className="get-choice flexRowCenter">
                <button className="font-bold"> GET </button>
                <p className="font-bold"> No, thanks </p>
            </div>
        </div>
    );
}

export default Header;