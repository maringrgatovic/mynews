import React from "react";
import { ImCross } from 'react-icons/im';
import './MobileMenuExit.css';

const MobileMenu = ({ toggleMobileMenu }) => {
    return(
        <div className='exit-icon' onClick={toggleMobileMenu}>
            <ImCross />
        </div>
    );
}

export default MobileMenu;