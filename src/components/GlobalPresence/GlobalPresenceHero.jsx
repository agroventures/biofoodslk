import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Globe } from 'lucide-react'

function GlobalPresenceHero() {
    return (
        <ImageHero
            badge="Exporting to 30+ Countries"
            icon={Globe}
            title="Global Impact"
            subtitle="From Sri Lankan Soil to the Global Table"
            description="Recognized as the 'World's Fairest Fairtrader,' we represent the gold standard of organic exports, connecting our dedicated farming communities with the global market through sustainable trade."
            img="/GlobalPresence/hero.avif"
            alt="Global trade and distribution of organic products"
        />
    )
}

export default GlobalPresenceHero
