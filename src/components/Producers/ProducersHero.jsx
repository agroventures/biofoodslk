import React from 'react'
import ImageHero from '../shared/ImageHero'
import { GrUserWorker } from 'react-icons/gr'

function ProducersHero() {
  return (
    <ImageHero
      icon={GrUserWorker}
      img="/Producers/hero.avif"
      badge="Marginalized Organic Producers' Association"
      title="MOPA"
      subtitle="Empowering Small-Scale Farmers"
      description="MOPA is a collective of small-scale organic farmers committed to sustainable agriculture and fair trade practices."
    />
  )
}

export default ProducersHero
