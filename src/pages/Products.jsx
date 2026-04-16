import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import ProductsHero from '../components/Products/ProductsHero'
import ProductsDetails from '../components/Products/ProductsDetails'

function Products() {
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
