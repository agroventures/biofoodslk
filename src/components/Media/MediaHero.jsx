import React from 'react'
import ImageHero from '../shared/ImageHero'
import { Camera } from 'lucide-react'


function MediaHero() {
  return (
    <ImageHero
        icon={Camera}
        img="/Media/hero.jpg"
        alt="Media BioFoods"
        badge="Community Impact"
        title="Media"
        subtitle="Stories & Insights"
        description="Discover the stories behind our mission through our curated collection of articles, videos, and press releases."
    />
  )
}

export default MediaHero
