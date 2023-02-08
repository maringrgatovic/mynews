import React from "react";
import LatestNewsScroll from '../LatestNewsScroll/LatestNewsScroll';
import './LatestNews.css';
import record from './record.png';

const LatestNews = () => {
    return(
        <div className="latest-news-container">
            <div className="title-container">
                <img src={record} alt='latest news icon' height='20px'></img>
                <p className="font-bold">Latest News</p>
            </div>
            <LatestNewsScroll />
        </div>
    );
}

export default LatestNews;