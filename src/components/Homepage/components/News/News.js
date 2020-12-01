import React, { Component } from 'react'
import './News.css'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderNews() {
        const allNews = this.props.news.articles
        return allNews.map((news, i) => {
            return (
                <div className='newsCard' key={i}>
                    <img src={news.images[0].url} alt='newsImage' />
                    <div className='newsMain'>
                        <h5>{news.headline}</h5>
                        <p>{news.description}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.news) {
            return <h1>Loading...</h1>
        } else {
            console.log(this.props.news)
            return (
                <div className='newsContainer'>
                    {this.renderNews()}
                </div>
            )
        }
    }
}

export default News