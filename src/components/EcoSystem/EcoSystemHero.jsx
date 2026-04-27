import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Leaf } from 'lucide-react'

function EcoSystemHero() {
    return (
        <ImageHero
            icon={Leaf}
            img="/EcoSystem/hero.png"
            badge="Our Foundation"
            title="Our Eco System"
            subtitle="A Holistic Agricultural Model"
            description={
                <>
                    Bio Foods operates a fully integrated ecosystem ensuring seamless coordination between
                    farming, processing, and export.
                </>
            }
        />
    )
}

export default EcoSystemHero
