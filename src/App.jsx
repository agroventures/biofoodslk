import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import ProcessingFacility from './pages/ProcessingFacility';
import Media from './pages/Media';
import ScrollToTop from './components/shared/ScrollToTop';
import Producers from './pages/Producers';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import QualityCertifications from './pages/QualityCertifications';
import EcoPlus from './pages/EcoPlus';
import Loader from './components/shared/Loader';
import { useEffect, useState } from 'react';
import Awards from './pages/Awards';
import GlobalPresence from './pages/GlobalPresence';
import Sustainability from './pages/Sustainability';
import PartnerWithUs from './pages/PartnerWithUs';
import EcoSystem from './pages/EcoSystem';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/global-presence" element={<GlobalPresence />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/eco-system" element={<EcoSystem />} />
        <Route path="/producers" element={<Producers />} />
        <Route path="/processing-facilities" element={<ProcessingFacility />} />
        <Route path="/media" element={<Media />} />
        <Route path="/quality-certifications" element={<QualityCertifications />} />
        <Route path="/eco-plus" element={<EcoPlus />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;