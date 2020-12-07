import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={'sidebar ' + this.props.class}>
                <button className="closebtn" onClick={this.props.handleSidebar}>&times;</button>
                <NavLink
                    className={'navLink '}
                    activeClassName={'navLink-active '}
                    exact
                    to='/'
                >
                    Home
                    </NavLink>
                <NavLink
                    className={'navLink '}
                    activeClassName={'navLink-active '}
                    exact
                    to='/games'
                >
                    Games
                    </NavLink>
                <NavLink
                    className={'navLink '}
                    activeClassName={'navLink-active '}
                    exact
                    to='/teams'
                >
                    Teams
                    </NavLink>
            </div>
        )
    }
}

export default Sidebar