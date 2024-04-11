import React from 'react'
import { useLocation } from 'react-router-dom'

const Main = () => {

    const location = useLocation();

  return (
    <div>
        <h1>Hello {location.state.id} and Welcome to OneByte </h1>
    </div>
  )
}

export default Main