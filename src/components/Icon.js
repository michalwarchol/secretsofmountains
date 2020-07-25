import React from 'react'

const Icon = ({icon, text}) => {
    return(
        <div className="icon col-12 col-md-4 d-flex flex-column align-content-center justify-content-center">
            <div className="image">
                <i className={icon}></i>
            </div>
            <div className="text">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Icon;