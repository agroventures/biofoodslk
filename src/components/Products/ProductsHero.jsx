import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Gift } from 'lucide-react'

function ProductsHero() {
    return (
        <ImageHero
            badge="100% Certified Organic"
            icon={Gift}
            title="Our Harvest"
            subtitle="Purely Bio, Truly Fair"
            description="Explore our world-class range of organic teas, heirloom spices, and premium coconut products-each ethically sourced from our network of over 10,000 small-scale farmers across Sri Lanka."
            img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Products/hero.jpg"
            alt="Organic Sri Lankan Spices and Tea"
        />
    )
}

export default ProductsHero
