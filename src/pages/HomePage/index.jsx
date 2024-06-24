import React from 'react'
import BannerCarousel from '../../components/BannerCarousel'
import ProductList from '../../components/ProductList'

const HomePage = () => {
  return (
    <>
      <div>
        <BannerCarousel />
        <ProductList />
      </div>
    </>
  )
}

export default HomePage