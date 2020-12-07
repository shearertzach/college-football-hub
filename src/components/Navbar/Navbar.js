import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navStyle: 'transparent',
            sidebar: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            this.setState({ navStyle: 'filled' })
        } else {
            this.setState({ navStyle: 'transparent' })
        }
    };

    handleSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }

    render() {
        return (
            <div className={'Navbar ' + this.state.navStyle}>
                {/* <img height='35px' src={`${process.env.PUBLIC_URL}/navLogo.png`} alt='navLogo' /> */}
                <p>College Football Hub</p>
                <div className='navLinksContainer'>
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

                <div className='sidebarButton' onClick={this.handleSidebar}>
                    <div />
                    <div />
                    <div />
                </div>

                {this.state.sidebar ? <Sidebar class='open' handleSidebar={this.handleSidebar} /> : <Sidebar class='closed' handleSidebar={this.handleSidebar} />}

            </div>
        )
    }
}

export default Navbar