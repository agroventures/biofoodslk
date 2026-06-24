import React from 'react'
import ImageHero from '../shared/ImageHero'
import { MdHighQuality } from 'react-icons/md'

function QualityCertificationsHero() {
    return (
        <ImageHero
            icon={MdHighQuality}
            badge="Global Standards & Integrity"
            title="Certified Purity"
            subtitle="Uncompromising Quality from Soil to Shelf"
            description="As a member of IFOAM and a world leader in biodynamic agriculture, our systems are audited to meet EU, USDA, and JAS organic regulations, ensuring every product is traceable and 100% chemical-free."
            img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/QualityCertifications/hero.webp"
            alt="Quality assurance and organic certifications"
        />
    )
}

export default QualityCertificationsHero
