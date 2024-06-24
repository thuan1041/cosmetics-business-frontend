import React from 'react'
import BannerCarousel from '../../components/BannerCarousel'
import ProductList from '../../components/ProductList'
import { Header } from 'antd/es/layout/layout'

const HomePage = () => {
  return (
    <>
      <BannerCarousel />
      <ProductList />
    </>
  )
}

export default HomePage