import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Leaf } from 'lucide-react'

function SustainabilityHero() {
    return (
        <ImageHero
            icon={Leaf}
            badge="Our Foundation"
            title="Sustainability"
            subtitle="A Core Commitment"
            img="/Sustainability/hero.webp"
            description={
                <>
                    Sustainability is not an initiative - it is the foundation of our operations.
                </>
            }
        />
    )
}

export default SustainabilityHero
