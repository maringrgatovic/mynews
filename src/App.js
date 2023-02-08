import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Logo from './Components/Logo/Logo';
import News from './Components/News/News';
import Categories from './Components/Categories/Categories';
import MobileButtons from './Components/MobileButtons/MobileButtons';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import MobileMenuExit from './Components/MobileMenuExit/MobileMenuExit';
import LatestNews from './Components/LatestNews/LatestNews';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      activeCategory: 'Home',
      favoriteArticlesTitles: [],
      favoriteArticles: [],
      mobileMenuActive: false,
      mobileButton: 'Featured'
    }
  }

  changeCategory = (newCategory) => {
    this.setState({activeCategory: newCategory});
    this.setState({mobileMenuActive: false});
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  toggleFavoriteArticle = (title, article) => {
    if(!this.state.favoriteArticlesTitles.includes(title)) {

        let newFavoriteArticlesTitles = this.state.favoriteArticlesTitles;
        newFavoriteArticlesTitles.push(title);
        this.setState({favoriteArticlesTitles: newFavoriteArticlesTitles});

        let articleParts = {
          title: article.title,
          author: article.author,
          url: article.url,
          image: article.urlToImage,
          article: article,
          source: {id: 1000}
        }
        let newFavoriteArticles = this.state.favoriteArticles;
        newFavoriteArticles.push(articleParts);
        this.setState({favoriteArticles: newFavoriteArticles});
        

    } else {

        const index = this.state.favoriteArticlesTitles.indexOf(title);
        let newFavoriteArticlesTitles = this.state.favoriteArticlesTitles;
        newFavoriteArticlesTitles.splice(index, 1);
        this.setState({favoriteArticlesTitles: newFavoriteArticlesTitles});

        let newFavoriteArticles = this.state.favoriteArticles;
        newFavoriteArticles.splice(index, 1);
        this.setState({favoriteArticles: newFavoriteArticles});
    }
    console.log(this.state.favoriteArticlesTitles);

    console.log(this.state.favoriteArticles);
  }

  toggleMobileMenu = () => {
    this.setState({mobileMenuActive: !this.state.mobileMenuActive});
  }

  toggleMobileButton = () => {
    this.state.mobileButton === 'Featured' ? 
            this.setState({mobileButton: 'Latest'})
            :
            this.setState({mobileButton: 'Featured'})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className= 'search-bar'>
          <div className='logo-and-button'>
            <Logo />
            {this.state.mobileMenuActive ? 
              <MobileMenuExit toggleMobileMenu={this.toggleMobileMenu}/> :
              <MobileMenu toggleMobileMenu={this.toggleMobileMenu}/>}
          </div>
          <SearchBar searchChange={this.onSearchChange}/>
        </div>
        {this.state.mobileMenuActive ? '' : 
          <MobileButtons 
            mobileButton={this.state.mobileButton}
            toggleMobileButton={this.toggleMobileButton}/>}

        <div className='news-page-desktop'>
          <Categories 
              changeCategory={ this.changeCategory }
              activeCategory={this.state.activeCategory}/>
          <News
              category={this.state.activeCategory}
              searchInput={this.state.searchField}
              favoriteArticlesTitles={this.state.favoriteArticlesTitles}
              favoriteArticles={this.state.favoriteArticles}
              toggleFavoriteArticle={this.toggleFavoriteArticle}/>
        </div>

        <div className='news-page-mobile'>
          <div className={this.state.mobileMenuActive ? '' : 'invisible'}>
            <Categories
                changeCategory={ this.changeCategory}
                activeCategory={this.state.activeCategory}/> 
          </div>
          <div className={this.state.mobileMenuActive ? 'invisible' : ''}>
            {this.state.mobileButton === 'Featured' ?
              <News 
                category={this.state.activeCategory}
                searchInput={this.state.searchField}
                favoriteArticlesTitles={this.state.favoriteArticlesTitles}
                favoriteArticles={this.state.favoriteArticles}
                toggleFavoriteArticle={this.toggleFavoriteArticle}
                className={this.state.mobileMenuActive ? 'invisible' : ''}/>
                :
                <LatestNews />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
