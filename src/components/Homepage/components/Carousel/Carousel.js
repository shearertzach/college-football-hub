import React, { Component } from 'react'
import { Carousel as Carou } from 'react-bootstrap'
import './Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Carou className='CarouselHome'>
                <Carou.Item>
                    <img
                        className="d-block"
                        src="https://static01.nyt.com/images/2020/01/07/sports/07cfp-schedule-01/merlin_166448439_713b3e2f-b3f2-4f51-800b-ac7c6b2e9279-superJumbo.jpg"
                        alt="Third slide" />
                </Carou.Item>
                <Carou.Item>
                    <img
                        className="d-block"
                        src="https://miro.medium.com/max/3320/1*NakxTvd6tFRohJ5_XbLoKA.jpeg"
                        alt="Third slide" />
                </Carou.Item>
                <Carou.Item>
                    <img
                        className="d-block"
                        src="https://collegefootballnews.com/wp-content/uploads/sites/83/2020/07/usatsi_14507593-2.jpg?w=1000&h=600&crop=1"
                        alt="Third slide" />
                </Carou.Item>
            </Carou>
        )
    }
}

export default Carousel