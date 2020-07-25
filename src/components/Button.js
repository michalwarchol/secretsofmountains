import React from 'react'

const Button = ({text, styles}) => {
    return(
        <div className="button d-flex justify-content-center align-items-center" style={styles}>
            <span>{text}</span>
        </div>
    )
}

export default Button;