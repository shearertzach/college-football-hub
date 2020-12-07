import React, { Component } from 'react'
import { motion } from 'framer-motion'
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
                <motion.div
                    className='newsCard'
                    key={i}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    initial={{ scale: 0.5, x: 1000 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        duration: 0.5
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    {/* <img src={news.images[0].url} alt='newsImage' /> */}
                    <div className='newsImg' style={{ backgroundImage: `url(${news.images[0].url})` }}></div>
                    <div className='newsMain'>
                        <h5>{news.headline}</h5>
                        <p>{news.description}</p>
                    </div>
                </motion.div>
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