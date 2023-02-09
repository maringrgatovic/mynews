import React, { Component } from "react";
import NewsBox from '../NewsBox/NewsBox';
import NewsBoxFavorite from "../NewsBoxFavorite/NewsBoxFavorite";
import LatestNews from "../LatestNews/LatestNews";
import './News.css';
import starInstructions from "./star_instructions.png";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            sources: [],
            categories: [],
            innerWidth: window.innerWidth
        }
    }

    componentDidMount() {
        this.setSourcesAndCategories();
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        let url = 'https://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=a57737f574ff4d239889b79be03c3570';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({articles: data.articles});
            })
            .catch(err => console.log('Something went wrong'));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.category !== this.props.category) {
            if(this.props.category === 'Favorites') {
                this.setState({articles: this.props.favoriteArticles});
            } else {
                let url = 'https://newsapi.org/v2/top-headlines?country=us&'
                          + `category=${this.props.category.toLowerCase()}&` + 
                          'apiKey=a57737f574ff4d239889b79be03c3570';
                fetch(url)
                    .then(response => response.json())
                    .then(data => this.setState({articles: data.articles}))
                    .catch(err => console.log('error'));
            }
        }
    }

    setSourcesAndCategories = () => {
        //this.setState({activeCategory: this.props.category})
        let sourcesArray = [];
        let categoriesArray = [];
        let sourcesUrl = 'https://newsapi.org/v2/top-headlines/sources?' +
                         'country=us&' +
                         'apiKey=a57737f574ff4d239889b79be03c3570';
        fetch(sourcesUrl)
            .then(response => response.json())
            .then(data => {
                sourcesArray = data.sources.map((source) => {
                    return source.id;
                });
                categoriesArray = data.sources.map((source) => {
                    return source.category;
                })
                this.setState({sources: sourcesArray,
                               categories: categoriesArray});
            })
            .catch(err => console.log('error'));
    }

    resize() {
        this.setState({innerWidth: window.innerWidth});
    }

    render() {
        if(this.props.favoriteArticles.length === 0 && this.props.category === 'Favorites') {
            return(
                <div className="star-instructions">
                    <img src={starInstructions} alt='star instructions'/>
                </div>
            );
        }
        return(
            <div className="news-grid">
                {(this.props.category === 'Favorites') ? 
                
                    this.state.articles.map((article, index) => {
                        if(article.title.toLowerCase().includes(
                                this.props.searchInput.toLowerCase())) {
                                    return (
                                        <NewsBoxFavorite
                                            key={index}
                                            article={article.article}
                                            imageUrl={article.image}
                                            title={article.title}
                                            author={article.author}
                                            articleUrl={article.url}
                                            toggleFavoriteArticle={this.props.toggleFavoriteArticle}
                                            favoriteArticlesTitles={this.props.favoriteArticlesTitles}/>
                                        );
                        }
                    return '';
                    })
                :
                    this.state.articles.map((article, index) => {
                        //extracting the right category if it exists
                        let category = '';
                        if(this.state.sources.includes(article.source.id)){
                            category = this.state.categories[
                                this.state.sources.indexOf(article.source.id)];                        
                        }

                        //returning widget
                        if(this.state.innerWidth > 800) {
                            if(index === 2) {
                                return(
                                    <LatestNews key={index}/>
                                );
                            }
                        }
                       

                        //returning normal articles
                        if(article.title.toLowerCase()
                                    .includes(this.props.searchInput.toLowerCase())) {
                            return (
                                    <NewsBox 
                                        key={index}
                                        article={article}
                                        imageUrl={article.urlToImage}
                                        category={category}
                                        title={article.title}
                                        author={article.author}
                                        articleUrl={article.url}
                                        toggleFavoriteArticle={this.props.toggleFavoriteArticle}
                                        favoriteArticlesTitles={this.props.favoriteArticlesTitles}/>
                            );
                        }
                        return '';
                    })}
            </div>
        );
    }
}

export default News;