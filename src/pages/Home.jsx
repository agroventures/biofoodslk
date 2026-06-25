import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HomeHero from '../components/Home/HomeHero';
import HomeCertifications from '../components/Home/HomeCertfications';
import useSEO from '../hooks/useSEO';
import HomeBrandNarrative from '../components/Home/HomeBrandNarrative';
import HomeAgroVenturesAdvantage from '../components/Home/HomeAgroVenturesAdvantage';
import HomeCorePrinciples from '../components/Home/HomeCorePrinciples';
import HomeClosingReflection from '../components/Home/HomeClosingReflection';
import HomeProductExperiences from '../components/Home/HomeProductExperiences';

function Home() {
    const url = window.location.href;

    useSEO({
        // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Home",
        // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <HomeHero section="1" />
            <HomeBrandNarrative section="02" />
            <HomeCertifications section="03" />
            <HomeAgroVenturesAdvantage section="04" />
            <HomeCorePrinciples section="05" />
            <HomeProductExperiences section="06" />
            <HomeClosingReflection section="07" />
            <Footer />
        </div>
    )
}

export default Home
