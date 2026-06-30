import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import ScrollToTop from './components/shared/ScrollToTop';
import Loader from './components/shared/Loader';
import Sustainability from './pages/Sustainability';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Producers = lazy(() => import('./pages/Producers'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Awards = lazy(() => import('./pages/Awards'));
const ProcessingFacility = lazy(() => import('./pages/ProcessingFacility'));
const QualityCertifications = lazy(() => import('./pages/QualityCertifications'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Careers = lazy(() => import('./pages/Careers'));
const NewsEvents = lazy(() => import('./pages/NewsEvents'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/processing-facilities" element={<ProcessingFacility />} />
          <Route path="/quality-certifications" element={<QualityCertifications />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-and-events" element={<NewsEvents />} />
          <Route path="/news-and-events/:id" element={<EventDetail />} />
          <Route path="/sustainability/" element={<Sustainability />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
