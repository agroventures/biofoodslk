import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Handshake } from 'lucide-react'

function PartnerWithUsHero() {
  return (
    <ImageHero
      variant="clean"
      icon={Handshake}
      badge="Collaboration"
      title="Partner With Us"
      subtitle="A Strategic Partnership"
      description={
        <>
          We seek long-term partnerships built on{' '}
          <span className="font-bold text-brand-primary">trust, quality, and shared values</span>.
        </>
      }
    />
  )
}

export default PartnerWithUsHero
