import React from 'react'

const Recomm = ({image, person, text}) => {
    return(
        <div className="recomm col-12 col-md-4 d-flex flex-column">
            <div className="image">
                <img src={image} alt="not found" />
            </div>
            <div className="person">
                <span>{person}</span>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Recomm;