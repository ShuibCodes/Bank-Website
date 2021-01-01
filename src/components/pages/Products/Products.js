import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjTwo,homeObjOne} from './Data'

import Footer from '../Footer/Footer'



function Products() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjOne}/>
            <Footer />
           
        </>
    )
}

export default Products