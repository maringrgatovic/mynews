import React, { Component } from 'react';
import '../NewsBox/NewsBox.css';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

class NewsBoxFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starClicked : false
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.article !== this.props.article) {
            this.setState({starClicked: false});
        }
        if(this.props.favoriteArticlesTitles.includes(this.props.title) && this.state.starClicked === false) {
            this.setState({starClicked: true});
        }
    }

    starOnClick = () => {
        this.setState({starClicked: !this.state.starClicked});
        this.props.toggleFavoriteArticle(this.props.title, this.props.article);
    }

    render() {
        const { imageUrl, title, author, articleUrl } = this.props;
        return(
            <div className="news-box">
                <a href={articleUrl}>
                    <img 
                        src={imageUrl !== null ? imageUrl : 
                            'https://st2.depositphotos.com/3223379/5688/i/600/depositphotos_56880259-stock-photo-words-news.jpg'}
                        alt='Image Not Found'></img>
                    <div className='news-box-text-container'>
                        <div>
                            <p className='font-blue-category news-category'>
                                Favorite
                            </p>
                            <p className='font-medium news-title'>{title}</p>
                        </div>
                        <p className='font-author news-author'>{author}</p>
                    </div>
                </a>
                {this.state.starClicked ?
                    <BsStarFill 
                        className='star-icon clicked'
                        onClick={this.starOnClick}/> :
                    <BsStar 
                        className='star-icon not-clicked'
                        onClick={this.starOnClick}
                    />
                }
            </div>
        );
    }
}

export default NewsBoxFavorite;