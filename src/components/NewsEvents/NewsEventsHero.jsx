import React from 'react';
import ImageHero from '../shared/ImageHero';
import { Newspaper } from 'lucide-react';

function NewsEventsHero() {
    return (
        <ImageHero
            icon={Newspaper}
            badge="Latest Updates"
            title="News & Events"
            subtitle="Stories That Matter"
            description="Stay informed with the latest news, industry events, and milestones from Bio Foods as we continue our journey toward a healthier and more sustainable world."
            img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/Events/1/13.webp"
            alt="Bio Foods News and Events"
        />
    );
}

export default NewsEventsHero;
