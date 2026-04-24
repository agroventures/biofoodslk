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
            img="/QualityCertifications/hero.avif"
            alt="Quality assurance and organic certifications"
        />
    )
}

export default QualityCertificationsHero
