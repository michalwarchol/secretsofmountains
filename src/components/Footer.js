import React from 'react'

const Footer = () => {
    return(
        <div className="footer">
            <div className="info container d-flex flex-column flex-md-row">
                <div className="brief col-12 col-md-4 d-flex flex-column align-items-center">
                    <h4>Basic Info</h4>
                    <p>Secrets Of Mountains is a fictional company placed in New York City. We organize flights and trips to the most interesting mountains around the world.</p>
                </div>
                <div className="questions col-12 col-md-4 d-flex flex-column align-items-center">
                    <h4>Common Questions</h4>
                    <span>What is the schedule of journeys?</span>
                    <span>What are the cost of journey?</span>
                    <span>Ho long a journey lasts?</span>
                </div>
                <div className="links col-12 col-md-4 d-flex flex-column align-items-center">
                    <h4>Other Links</h4>
                    <span>About Us</span>
                    <span>Contact</span>
                    <span>Private Policy</span>
                    <span>Carrier</span>
                </div>
            </div>
            <small>Copyright &copy; {new Date().getFullYear()} Michał Warchoł</small>
        </div>
    )
}

export default Footer;