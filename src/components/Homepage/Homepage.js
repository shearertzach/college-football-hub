import React, { Component } from 'react'
import Carousel from './components/Carousel/Carousel'
import FeaturedGames from './components/FeaturedGames/FeaturedGames'
import News from './components/News/News'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import './Homepage.css'

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 46%
`;

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: null,
            news: null,
            isLoaded: false,
            error: null,
        }
    }

    componentDidMount() {
        this.getScores()
        this.getNews()
    }

    async getScores() {
        try {
            const responce = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard')
            const json = await responce.json()
            this.setState({
                scores: json,
                isLoaded: true
            })
            return json
        } catch (error) {
            this.setState({
                error,
                isLoaded: true
            })
            return error
        }
    }

    async getNews() {
        try {
            const responce = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/news')
            const json = await responce.json()
            this.setState({
                news: json,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                error,
                isLoaded: true
            })
        }
    }

    render() {
        if (this.state.error) {
            return <h1>{this.state.error}</h1>
        } else if (!this.state.isLoaded || !this.state.news || !this.state.scores) {
            return <ClipLoader
                css={override}
                size={100}
                color={"#201f22"}
                loading={!this.state.isLoaded}
            />
        } else {
            return (
                <div>
                    <Carousel />
                    <div className='HeadContainer'>
                        <FeaturedGames games={this.state.scores} />
                        <News news={this.state.news} />
                    </div>
                </div>
            )
        }

    }
}

export default Homepage