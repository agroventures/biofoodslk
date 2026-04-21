import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProductsHero from '../components/Products/ProductsHero'
import ProductsDetails from '../components/Products/ProductsDetails'
import useSEO from '../hooks/useSEO'

function Products() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Tea Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    // description: "Premium organic tea, spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Products",
    // keywords: ["organic food Sri Lanka, fair trade tea, organic spices exporter, coconut products Sri Lanka"],
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <ProductsHero />
      <ProductsDetails />
      <Footer />
    </div>
  )
}

export default Products
