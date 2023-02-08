import React, { Component } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiSuitcaseFill } from 'react-icons/ri';
import { BsShieldFillPlus } from 'react-icons/bs';
import { MdScience } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';
import { CgScreen } from 'react-icons/cg';
import { BsStarFill } from 'react-icons/bs';
import './CategoryBox.css';

class CategoryBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onCategoryClick = (iconIndex, categoryNames) => {
        this.props.changeCategory(iconIndex === 0 ? 'General' : categoryNames[iconIndex]);
    }

    render() {
        let { iconIndex } = this.props;
        const icons = [<AiTwotoneHome />, <RiSuitcaseFill />, <BsShieldFillPlus />,
                   <MdScience />, <IoMdFootball />, <CgScreen />, <BsStarFill />];
        const categoryNames = ['General', 'Business', 'Health',
                   'Science', 'Sports', 'Technology', 'Favorites'];
        return(
            <div 
                className={(categoryNames[iconIndex] === this.props.activeCategory) || 
                            (categoryNames[iconIndex] === 'General' &&
                             this.props.activeCategory === 'Home') ? 
                                'flexColumnCenter category-box-active' : 
                                'flexColumnCenter category-box'}
                onClick={() => this.onCategoryClick(iconIndex, categoryNames)}>
                    {icons[iconIndex]}
                    <p className='category-name'>{iconIndex === 0 ? 'Home' : categoryNames[iconIndex]}</p>
            </div>
        );
    }
}

export default CategoryBox;