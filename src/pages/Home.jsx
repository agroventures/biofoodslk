import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HomeHero from '../components/Home/HomeHero';
import HomeCertifications from '../components/Home/HomeCertfications';
import useSEO from '../hooks/useSEO';
import HomeAgroVenturesAdvantage from '../components/Home/HomeAgroVenturesAdvantage';
import HomeCorePrinciples from '../components/Home/HomeCorePrinciples';
import HomeClosingReflection from '../components/Home/HomeClosingReflection';
import HomeProductExperiences from '../components/Home/HomeProductExperiences';
import HomeIntro from '../components/Home/HomeIntro';
import HomeSegments from '../components/Home/HomeSegments';
import HomeEcoPlus from '../components/Home/HomeEcoPlus';

function Home() {
    const url = window.location.href;

    useSEO({
        title: "Organic & Fairtrade Spices & Coconut Products | Bio Foods Sri Lanka",
        description: "Bio Foods Sri Lanka — the world's first fair-trade certified spice exporter. Premium organic spices, coconut products & frozen herbs. Sustainably farmed, globally certified.",
        keywords: ["bio foods sri lanka", "biofoods agroventures", "organic spices exporter sri lanka", "fair trade spice exporter", "coconut products sri lanka", "world's first fair trade spice exporter", "organic food supplier sri lanka", "USDA organic sri lanka", "fairtrade certified exporter", "bulk organic spices", "desiccated coconut exporter", "frozen herbs sri lanka"],
        url,
        image_alt: "Bio Foods Sri Lanka – Organic & Fairtrade Products",
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <HomeHero section="1" />
            {/* <HomeCertifications section="02" /> */}
            <HomeIntro section="02" />
            <HomeAgroVenturesAdvantage section="03" />
            {/* <HomeCorePrinciples section="05" /> */}
            <HomeProductExperiences section="04" />
            <HomeSegments section="05"  />
            {/* <HomeEcoPlus /> */}
            <HomeClosingReflection section="06" />
            <Footer />
        </div>
    )
}

export default Home
