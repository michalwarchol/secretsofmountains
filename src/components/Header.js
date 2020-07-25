import React from 'react'
import {Link} from 'react-scroll'
import Image from '../img/banner.png';
import Button from './Button'

const buttonStyle = {
    fontSize: "120%",
    fontWeight: "bold"
}

const Header = () => {
    return(
        <header className="header d-flex justify-content-center">
            <img src={Image} alt="not found" />
            <div className="texts container d-flex align-items-center flex-column">
                <h1>SECRETS OF MOUNTAINS</h1>
                <h5>Journeys you are dreaming of</h5>
                <Link to="Content" smooth={true}><Button text="Explore" styles={buttonStyle} /></Link>
            </div>
        </header>
    )
}

export default Header;