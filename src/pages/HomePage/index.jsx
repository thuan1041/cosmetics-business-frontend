import React from 'react'
import BannerCarousel from '../../components/BannerCarousel'
import ProductList from '../../components/ProductList'
import { Header } from 'antd/es/layout/layout'
import ProductPagination from '../../components/ProductPagination/ProductPagination'
import { useEffect, useState } from 'react'
import axios from 'axios'
const HomePage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get('http://localhost:8080/api/products/getListProduct?page=1&limit=100');
      console.log(products.data.data);
      if (products.data.data) {
        setProducts(products.data.data);
      }
    }
    fetchProducts()
  }, []);

  return (
    <>
      <BannerCarousel />
      <ProductList />
      {/* <h1 className="text-3xl font-bold text-center my-6">Product List</h1> */}
      {products && <ProductPagination products={products} />}
    </>
  )
}

export default HomePage