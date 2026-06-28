import React from 'react'
import RestaurantCard from './RestaurantCard'
import './Restaurants.css'
const NearBySection = () => {
  return (
    <section className='restaurantsSection'>
         <div className="title">
            <h1>NearBy Restaurants</h1>
         </div>
         <div className="cards">
            <RestaurantCard/>
         </div>
    </section>
  )
}

export default NearBySection