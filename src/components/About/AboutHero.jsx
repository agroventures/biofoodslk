import React from "react";
import ImageHero from "../shared/ImageHero";
import { Building, Building2 } from "lucide-react";

function AboutHero() {
  return (
    <ImageHero
      badge="Est. 1993 | Sri Lanka"
      icon={Building2}
      title="The Organic Way"
      subtitle="Pioneering Sustainable & Ethical Agriculture for over 30 Years"
      description="From our roots in Kandy to becoming global leaders in Fair Trade, we bridge the gap between small-scale farmers and the international market through 100% organic, chemical-free production."
      img="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/biofoodslk/About/hero.jpg"
      alt="Bio Foods Organic Tea Plantation in Sri Lanka"
    />
  );
}

export default AboutHero;
