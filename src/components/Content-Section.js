import React from "react"

const ContentSection = ({path, text}) => {
    return(
        <div className="content-section d-flex flex-column flex-md-row align-items-center">
            <div className="image col-12 col-md-4">
                <img src={path} alt="not found" />
            </div>
            <div className="text col-12 col-md-8">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ContentSection;