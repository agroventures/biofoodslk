import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProductsHero from '../components/Products/ProductsHero'
import ProductsGrid from '../components/Products/ProductsGrid'
import ProductInquiryForm from '../components/Products/ProductInquiryForm'
import useSEO from '../hooks/useSEO'

function Products() {
  const url = window.location.href;

  useSEO({
    // title: "Organic & Fairtrade Spices Coconut Frozen Producer | Bio Foods | Sri Lanka",
    // description: "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
    url,
    image_alt: "Products",
    // keywords: ["organic food Sri Lanka, fair trade organic spices exporter, coconut products Sri Lanka"],
  });

  return (
    <div className='min-h-screen'>
      <Navbar />
      <ProductsHero />
      <ProductsGrid />
      <ProductInquiryForm />
      <Footer />
    </div>
  )
}

export default Products
