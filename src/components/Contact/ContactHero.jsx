import React from 'react';
import ImageHero from '../shared/ImageHero';
import { Phone } from 'lucide-react';

function ContactHero() {
    return (
        <ImageHero
            icon={Phone}
            badge="We’re Here to Help"
            title="Connect With Us"
            subtitle="From our Estates to Your Doorstep"
            description="Whether you are an international buyer, a prospective partner, or a curious consumer, we value every connection. Contact our Colombo or Kandy offices to learn more about our world-class organic products."
            img="/Contact/hero.jpg"
            alt="Bio Foods Sri Lanka contact and support"
        />
    );
}

export default ContactHero;