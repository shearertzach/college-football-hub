import React, { Component } from 'react'
import TeamRankings from './components/TeamCard/TeamRankings'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 46%
`;

class Rankings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: null,
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        this.getTeams()
    }

    async getTeams() {
        try {
            const responce = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings')
            const json = await responce.json()
            this.setState({
                teams: json,
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
        } else if (!this.state.isLoaded || !this.state.teams) {
            return <ClipLoader
                css={override}
                size={100}
                color={"#201f22"}
                loading={!this.state.isLoaded}
            />
        } else {
            return (
                <div>
                    <TeamRankings teams={this.state.teams.rankings[0].ranks} />
                </div>
            )
        }
    }
}

export default Rankings