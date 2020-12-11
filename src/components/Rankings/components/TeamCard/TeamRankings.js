import React, { Component } from 'react'
import './TeamRankings.css'

class TeamRankings extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    createCards() {
        const teams = this.props.teams
        console.log(teams)
        return teams.map((team, i) => {
            let trend = team.trend
            let trendColor = ''
            if (trend.length > 1) {
                if (trend.charAt(0) === '+') {
                    trend = '▲'
                    trendColor = '#3bff6f'
                } else if (trend.charAt(0) === '-') {
                    trend = '▼'
                    trendColor = '#ff3b3b'
                }
            } else {
                trend = '●'
                trendColor = '#ffce3b'
            }

            return (
                <div key={i} className='teamRankCard' style={{ backgroundColor: `#${team.team.color}4D` }}>
                    <div className='teamRankCardMain'>
                        <p className='teamName'><b>{team.team.nickname}</b></p>
                        <p className='teamRank'>Rank: <b>{team.current} </b><span style={{ color: trendColor }}>{trend}</span></p>
                    </div>
                    <p className='teamRecord'>Record: <b>{team.recordSummary}</b></p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2 style={{ marginTop: '10px' }}>Team Rankings</h2>
                <div className='teamRankingsContainer'>
                    {this.createCards()}
                </div>
            </div>
        )
    }
}

export default TeamRankings