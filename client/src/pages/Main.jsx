import React from 'react'
import Hero from '../components/ui/Hero'
import Restaurants from '../components/features/restaurants'
import NearBySection from '../components/features/NearBySection'
import BecomePartner from '../components/features/BecomePartner'
import WhyDeliserve from '../components/features/WhyDeliserve'
const Main = () => {
  return (
    <main>
      <Hero />
      <Restaurants/>
      <BecomePartner/>
      <WhyDeliserve/>
    </main>
  )
}

export default Main