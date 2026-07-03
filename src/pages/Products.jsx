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
    title: "Organic Spices & Coconut Products | Bio Foods Sri Lanka",
    description: "Explore Bio Foods' certified organic product range — whole spices, spice powders, tea-bag cut spices, desiccated coconut and coconut chips. Fairtrade & biodynamic certified.",
    keywords: ["organic spices sri lanka", "buy organic spices bulk", "desiccated coconut exporter sri lanka", "coconut chips wholesale", "organic cinnamon exporter", "organic black pepper sri lanka", "organic turmeric powder", "organic cloves exporter", "spice powder exporter", "tea bag cut spices", "fair trade organic spices", "biodynamic spices sri lanka"],
    url,
    image_alt: "Organic Spices & Coconut Products – Bio Foods Sri Lanka",
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
