import React, { Component } from 'react'
import { motion } from 'framer-motion'
import PropagateLoader from "react-spinners/ClipLoader";
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
            function gameInfo() {
                if (game.status.type.state === 'pre') {
                    return (
                        <div className='liveContainer'>
                            <b>{game.status.type.shortDetail}</b>
                        </div>
                    )
                } else if (game.status.type.state === 'live') {
                    return (
                        <div className='liveContainer'>
                            <motion.span
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 1.25
                                }}
                                className="dot"
                            />
                            <b>Live</b>
                        </div>
                    )
                } else if (game.status.type.state === 'post') {
                    return (
                        <div className='liveContainer'>
                            <b>{game.status.type.shortDetail}</b>
                        </div>
                    )
                }
            }
            console.log(game.status.type.state)
            return (
                <motion.div
                    className='GameCard'
                    key={i}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    initial={{ scale: 0.5, x: -200 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                >

                    {gameInfo()}

                    <div className='TeamContainer'>
                        <img src={team2.team.logo} alt='logo'></img>
                        <p className='GameTeam'>{team2.team.abbreviation}</p>
                        <p style={{ fontSize: '12px' }}>&nbsp;{team2.curatedRank.current === 99 ? '' : team2.curatedRank.current}</p>
                        <p className='GameScore'>{team2.score}</p>
                    </div>
                    <div className='TeamContainer'>
                        <img src={team1.team.logo} alt='logo'></img>
                        <p className='GameTeam'>{team1.team.abbreviation}</p>
                        <p style={{ fontSize: '12px' }}>&nbsp;{team1.curatedRank.current === 99 ? '' : team1.curatedRank.current}</p>
                        <p className='GameScore'>{team1.score}</p>
                    </div>
                </motion.div>
            )
        })
    }

    render() {
        if (!this.props.games) {
            return <PropagateLoader
                size={150}
                color={"#123abc"}
                loading={!this.props.games}
            />
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