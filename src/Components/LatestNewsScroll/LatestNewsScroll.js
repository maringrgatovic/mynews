import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LatestNewsArticle from "../LatestNewsArticle/LatestNewsArticle";

class LatestNewsScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            hasMore: true,
            page: 1
        }
    }

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData = () => {
        if (this.state.news.length >= 100) {
            this.setState({hasMore: false});
            return;
        }
        let url = 'https://newsapi.org/v2/top-headlines?language=en' + 
                  '&pageSize=10' + `&page=${this.state.page}` +
                  '&apiKey=a57737f574ff4d239889b79be03c3570';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    this.setState({
                        news: this.state.news.concat(data.articles)
                    });
                }, 500);
            });
    }

    render() {
        return(
            <InfiniteScroll
                dataLength={this.state.news.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
                height={413}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {this.state.news.map((article, index) => (
                    <LatestNewsArticle 
                        key={index}
                        title={article.title}
                        publishTime={article.publishedAt}
                        link={article.url}/>
                ))}
            </InfiniteScroll>

        );
    }
}

export default LatestNewsScroll;