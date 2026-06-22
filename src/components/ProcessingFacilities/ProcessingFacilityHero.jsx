import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Recycle } from 'lucide-react'

function ProcessingFacilityHero() {
  return (
    <ImageHero
        icon={Recycle}
        img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/ProcessingFacility/hero.webp"
        badge="Process"
        title="Processing Facility"
        subtitle="Quality Assurance"
        description="Bio Foods operates a fully integrated ecosystem ensuring seamless coordination between farming, processing, and export."
    />
  )
}

export default ProcessingFacilityHero