import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Award } from 'lucide-react'

function AwardsHero() {
  return (
    <ImageHero
      icon={Award}
      badge="Global Standards & Integrity"
      title="Certified Purity"
      subtitle="Uncompromising Quality from Soil to Shelf"
      description="As a member of IFOAM and a world leader in biodynamic agriculture, our systems are audited to meet EU, USDA, and JAS organic regulations, ensuring every product is traceable and 100% chemical-free."
      img="Awards/hero.png"
      alt="Quality assurance and organic certifications"
    />
  )
}

export default AwardsHero
