import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjThree } from './Data'

import Footer from '../Footer/Footer'



function Services() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <Footer />
           
        </>
    )
}

export default Services