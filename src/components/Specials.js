import React from 'react'
import FoodCardsList from './FoodCards/FoodCardsList'

const Specials = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="content">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <FoodCardsList />
      </div>
    </section>
  )
}

export default Specials