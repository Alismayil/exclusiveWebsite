import React from 'react'
import HeaderSection from '../../components/HeaderSection'
import FlashSalesSection from '../../components/FlashSalesSection'
import BrowseCategorySection from '../../components/BrowseCategorySection'
import BestSellingSection from '../../components/BestSellingtSection'
import NewArrival from '../../components/NewArrivalSection'
import ExploreOurProductSection from '../../components/ExploreOurProductsSection'

function HomePage() {
  return (
    <div>
      <HeaderSection/>
      <FlashSalesSection/>
      <BrowseCategorySection/>
      <BestSellingSection/>
      <ExploreOurProductSection/>
      <NewArrival/>
    </div>
  )
}

export default HomePage