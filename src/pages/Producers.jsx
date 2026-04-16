import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProducersHero from '../components/Producers/ProducersHero'
import ProducersIntro from '../components/Producers/ProducersIntro'
import ProducersWebNotice from '../components/Producers/ProducersWebNotice'

function Producers() {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <ProducersHero />
            <ProducersIntro />
            <ProducersWebNotice />
            <Footer />
        </div>
    )
}

export default Producers
