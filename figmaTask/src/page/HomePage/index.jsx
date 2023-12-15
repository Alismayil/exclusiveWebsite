import React from 'react'
import HeaderSection from '../../components/HeaderSection'
import FlashSalesSection from '../../components/FlashSalesSection'
import BrowseCategorySection from '../../components/BrowseCategorySection'
import BestSellingSection from '../../components/BestSellingtSection'
import NewArrival from '../../components/NewArrivalSection'

function HomePage() {
  return (
    <div>
      <HeaderSection/>
      <FlashSalesSection/>
      <BrowseCategorySection/>
      <BestSellingSection/>
      <NewArrival/>
    </div>
  )
}

export default HomePage