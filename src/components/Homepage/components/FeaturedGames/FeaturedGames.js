import React, { Component } from 'react'
import './FeaturedGames.css'

class FeaturedGames extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderGames() {
        const allGames = this.props.games['events']
        return allGames.map((game, i) => {
            const teams = game['competitions'][0]['competitors']
            const team1 = teams[0]
            const team2 = teams[1]
            return (
                <div className='GameCard' key={i}>
                    <div className='TeamContainer'>
                        <img src={team2.team.logo} alt='logo'></img>
                        <p className='GameTeam'>{team2.team.abbreviation}</p>
                        <p className='GameScore'>{team2.score}</p>
                    </div>
                    <div className='TeamContainer'>
                        <img src={team1.team.logo} alt='logo'></img>
                        <p className='GameTeam'>{team1.team.abbreviation}</p>
                        <p className='GameScore'>{team1.score}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.games) {
            return <h1>Loading...</h1>
        } else {
            console.log(this.props.games)
            return (
                <div className='FeaturedGames'>
                    {this.renderGames()}
                </div>

            )
        }

    }
}

export default FeaturedGames