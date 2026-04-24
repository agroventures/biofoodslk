import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Leaf } from 'lucide-react'

function SustainabilityHero() {
    return (
        <ImageHero
            variant="clean"
            icon={Leaf}
            badge="Our Foundation"
            title="Sustainability"
            subtitle="A Core Commitment"
            description={
                <>
                    Sustainability is not an initiative — it is{' '}
                    <span className="font-bold text-brand-primary">the foundation of our operations</span>.
                </>
            }
        />
    )
}

export default SustainabilityHero
