import React from 'react'
// import { useParams } from 'react-router-dom'

import './styles.css'

import Left from './Left'
import Right from './Right'

const ShowPage = () => {

  // const { username } = useParams()
  
  return (
    <div className='wrapper'>
      <Left />
      <Right />
    </div>
  )
}
export default ShowPage