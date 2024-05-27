import React from 'react'

const MealItem = ({params}) => {
  return (
    <div>{params.slug} Description
    
    <h1>{params.slug} prepared by Chef. XYZ</h1>
    </div>

  )
}

export default MealItem