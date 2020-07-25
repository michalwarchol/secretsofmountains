import React from 'react'
import {Element} from 'react-scroll'
import Header from './Header'
import ContentSection from './Content-Section'
import Icons from './Icons'
import Recommendations from "./Recommendations"
import Footer from './Footer'
import Content1 from '../img/content1.png'
import Content2 from '../img/content2.png'
import Content3 from '../img/content3.png'

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Element name="Content" className="content container"> 
                <ContentSection path={Content1} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor lectus ut ante feugiat luctus. In quis posuere nulla, nec condimentum ipsum. Morbi vitae ullamcorper ligula. Morbi sagittis ornare ultricies. Aliquam ut lacinia nulla. Integer sollicitudin leo at metus cursus dictum. Nam sodales eros id orci condimentum tristique. Duis non placerat arcu. Proin eu aliquam erat, ac laoreet massa. Praesent accumsan metus nunc, eu ullamcorper lorem ornare eget. Integer ut tempor mauris." />
                <ContentSection path={Content2} text="Curabitur rhoncus vestibulum urna, non euismod nibh. Duis quis turpis pulvinar, tincidunt est ut, euismod dolor. Donec volutpat vel orci eu faucibus. Proin a ipsum vel nisl sollicitudin ultricies. Aliquam in lorem eros." />
                <ContentSection path={Content3} text="Sed ornare, ante non porttitor congue, elit ipsum vehicula nibh, in rhoncus turpis felis sit amet nulla. Aliquam imperdiet vulputate ligula. Quisque aliquet tristique ornare. Maecenas vulputate vulputate purus, a vestibulum nisl viverra non. Nam a elit vel est consectetur dictum. Proin consequat felis sed sem lacinia, at fringilla massa malesuada. Pellentesque massa erat, bibendum sed viverra pharetra, semper at felis. Aliquam erat volutpat. Duis dignissim, lorem ut viverra pretium, tellus nunc auctor sapien, nec facilisis magna turpis at libero." />
            </Element>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path 
                    fill="#404040" 
                    fill-opacity="1" 
                    d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <Icons />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path 
                    fill="#404040" 
                    fill-opacity="1" 
                    d="M0,64L34.3,64C68.6,64,137,64,206,64C274.3,64,343,64,411,80C480,96,549,128,617,144C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,69.3C1097.1,64,1166,96,1234,90.7C1302.9,85,1371,43,1406,21.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <Recommendations />
            <Footer />
        </div>
    );
}

export default Main;