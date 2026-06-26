import React from 'react';
import ImageHero from '../shared/ImageHero';
import { Briefcase } from 'lucide-react';

function CareersHero() {
    return (
        <ImageHero
            icon={Briefcase}
            badge="Join Our Team"
            title="Grow With Us"
            subtitle="Careers at Bio Foods"
            description="Be part of a purpose-driven team that brings organic goodness from Sri Lanka's finest estates to the world. We nurture talent the same way we nurture our land - with care, commitment, and integrity."
            img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Contact/hero.webp"
            alt="Careers at Bio Foods Sri Lanka"
        />
    );
}

export default CareersHero;
