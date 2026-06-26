import React from 'react'
import ImageHero from '../shared/ImageHero'
import { GrUserWorker } from 'react-icons/gr'

function ProducersHero() {
  return (
    <ImageHero
      icon={GrUserWorker}
      img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Producers/hero.webp"
      badge="Marginalized Organic Producers' Association"
      title="MOPA"
      subtitle="Empowering Small-Scale Farmers"
      description="MOPA is a collective of small-scale organic farmers committed to sustainable agriculture and fair trade practices."
    />
  )
}

export default ProducersHero
