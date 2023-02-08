import React from "react";
import { GoThreeBars } from 'react-icons/go';

const MobileMenu = ({ toggleMobileMenu }) => {
    return(
        <div onClick={toggleMobileMenu}>
            <GoThreeBars className='menu-icon'/>
        </div>
    );
}

export default MobileMenu;