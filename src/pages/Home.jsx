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
        // title: "Organic & Fairtrade Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
        description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
        url,
        image_alt: "Home",
        // keywords: ["organic food Sri Lanka, fair trade organic spices exporter, coconut products Sri Lanka"],
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
            <HomeEcoPlus />
            <HomeClosingReflection section="06" />
            <Footer />
        </div>
    )
}

export default Home
