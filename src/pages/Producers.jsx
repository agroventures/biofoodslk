import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProducersHero from '../components/Producers/ProducersHero'
import ProducersIntro from '../components/Producers/ProducersIntro'
import useSEO from '../hooks/useSEO'

function Producers() {
    const url = window.location.href;

    useSEO({
        title: "Our Producers | Organic Farmers & Smallholders | Bio Foods Sri Lanka",
        description: "Bio Foods works with thousands of certified organic smallholder farmers across Sri Lanka, ensuring fair trade practices, sustainable agriculture and premium quality produce.",
        keywords: ["organic farmers Sri Lanka", "fair trade producers", "smallholder farmers", "bio foods producers", "sustainable farming Sri Lanka"],
        url,
        image_alt: "Organic Producers – Bio Foods Agroventures",
    });

    return (
        <div className='min-h-screen'>
            <Navbar />
            <ProducersHero />
            <ProducersIntro />
            <Footer />
        </div>
    )
}

export default Producers
