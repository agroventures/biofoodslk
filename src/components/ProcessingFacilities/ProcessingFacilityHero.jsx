import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Recycle } from 'lucide-react'

function ProcessingFacilityHero() {
  return (
    <ImageHero
        icon={Recycle}
        img="/ProcessingFacility/hero1.jpg"
        badge="Process"
        title="Processing Facility"
        subtitle="Quality Assurance"
        description="Bio Foods operates a fully integrated ecosystem ensuring seamless coordination between farming, processing, and export."
    />
  )
}

export default ProcessingFacilityHero