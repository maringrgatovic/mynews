import React from "react";
import './MobileButtons.css';

const MobileButtons = ({ mobileButton, toggleMobileButton}) => {

    return(
        <div className="mobile-buttons-container">
            <button 
                className={mobileButton === 'Featured' ? 'clicked mobile-button' : 'mobile-button'} 
                onClick={toggleMobileButton}>
                    Featured
            </button>
            <button 
                className={mobileButton ===  'Latest' ? 'clicked mobile-button' : 'mobile-button'} 
                onClick={toggleMobileButton}>
                    Latest
            </button>
        </div>
    );
}

export default MobileButtons;