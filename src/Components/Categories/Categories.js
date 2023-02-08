import React from "react";
import CategoryBox from "../CategoryBox/CategoryBox";
import './Categories.css';

const Categories = ({ changeCategory, activeCategory }) => {

    const arr = [];
    for(let i = 0; i < 7; i++) {
        arr[i] = i;
    }
    return(
        <div className="categories">
            {arr.map((number, index) => {
                return <CategoryBox 
                            key={index} 
                            iconIndex={number}
                            changeCategory={changeCategory}
                            activeCategory={activeCategory}/>; 
            })}
        </div>
    );
}

export default Categories;