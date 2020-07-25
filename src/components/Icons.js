import React from 'react'
import {Element} from "react-scroll"
import Icon from './Icon'

const Icons = () => {
    return(
        <Element name="Icons" className="icons">
            <div className="container d-flex flex-row flex-wrap justify-content-center">
                <Icon icon="icon-location" text="Visit the most fantastic mountains around the world! Now in range of your hands." />
                <Icon icon="icon-suitcase" text="Dont't waste time on packing. Just take the most important things to small bag. All the important stuff you will get once, you arrive our airport." />
                <Icon icon="icon-money" text="Save money by choosing one of our travels. Try now with 10% discount." />
                <Icon icon="icon-calendar" text="We organize travel every week! Follow our schedule and choose your dream journey." />
                <Icon icon="icon-thumbs-up-alt" text="Over 96% of our customers say, they loved their journeys. You will be able to take a survey as well." />
            </div>
        </Element>
    )
}

export default Icons;