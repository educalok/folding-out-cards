import Header from './components/Header'
import React, { useState } from 'react'
import flights from './data/flights.json'
import './style.css'
import uuid4 from 'uuid4'
import Cell from './components/Cell'

const App = () => {
  return (
    <div className='App'>
      {Header}
      {flights.map(flight => (
        <Cell
          key={uuid4()}
          logo={flight.logo}
          style={flight.style}
          label={flight.label}
        />
      ))}
    </div>
  )
}

export default App
