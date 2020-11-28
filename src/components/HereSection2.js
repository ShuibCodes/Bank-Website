import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection2.css'

function HeroSectionTwo({
    lightBg, topLine, lightTextDesc, headline, lightText, description, buttonLabel, img, alt, imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
           <div className="container">
           <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img"/>
                        </div>
                    </div>
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start'? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'} >{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >{description}</p>
                            <Link to='/sign-up'>
                                <Button ></Button>
                            </Link>
                        </div>
                    </div>
                 

                </div>
           </div>
        </div>

      
    </>);
}

export default HeroSectionTwo