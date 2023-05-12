import CollectionProducts from '@/components/collection-products/CollectionProducts'
import HomeSlider from '@/components/home-slider/home-slider'
import ProductList from '@/components/product-list/product-list'
import HomeSectionSecond from '@/components/section-second/home-section-second'

import React from 'react'

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <HomeSectionSecond/>
      <CollectionProducts/>
      <ProductList/>
    </div>
  )
}

export default Home