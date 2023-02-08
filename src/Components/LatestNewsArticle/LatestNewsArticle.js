import React from "react";
import './LatestNewsArticle.css'

const LatestNewsArticle = ({ title, publishTime, link }) => {
    return(
        <a href={link}>
            <div className="article-box">
                <p className="font-blue-category">
                    {publishTime.slice(11,16)}
                </p>
                <p className="font-medium title">{title}</p>
            </div>
        </a>
    );
}

export default LatestNewsArticle;