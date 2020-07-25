import React from 'react'
import Recomm from './Recomm'
import Person1 from "../img/person1.png"
import Person2 from "../img/person2.png"
import Person3 from "../img/person3.png"

const Recommendations = () => {
    return(
        <div className="recommendations container d-flex flex-column flex-md-row">
            <Recomm image={Person1} person="Camilla, Top Guide" text="Being a travel guide is demanding, but it is a price I love paying. In Secrets Of Mountains I walk the most breathtaking paths with my visitors. Every journey I take makes me feel excited, even if I'm there for a hundred time." />
            <Recomm image={Person3} person="Martin, CEO" text="When I see hundreds of people returning from a journey with a face full of impressions I am proud of our team. We try to improve your journeys everyday to give you what you are paying for." />
            <Recomm image={Person2} person="Hector, Travel Supervisor" text="Organizing a journey is the best part of my work. I always try to organize something, what could surprise tourists." />
        </div>
    )
}

export default Recommendations;