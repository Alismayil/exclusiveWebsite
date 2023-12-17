import React from 'react'
import './about.scss'
import OurStorySection from '../../components/OurStorySection'
import AboutPeopleSection from '../../components/AboutPeopleSection'
import AboutUpChooseBoxSection from '../../components/AboutUpChooseBoxSection'
import AboutDownChooseBoxSection from '../../components/AboutDownChooseBoxSection'

function AboutPage() {
  return (
<>
<OurStorySection/>
<AboutUpChooseBoxSection/>
 <AboutPeopleSection/>
 <AboutDownChooseBoxSection/>
</>
  )
}

export default AboutPage