import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import ExploreProducts from '../../components/exploreProducts/ExploreProducts'
import DisplayProducts from '../../components/displayProducts/DisplayProducts'

const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory}/>
      <DisplayProducts category={category}/>
    </div>
  )
}

export default Home
