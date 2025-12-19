import React from 'react'
import Vertical from './components/Vertical'
import './App.css'

const App = () => {
  return (
    <>
      <div className='app'>
        <div>
          <Vertical />
          <Vertical />
        </div>
        <div className='sec-ver'>
          <Vertical />
          <Vertical />
        </div>
        <div>
          <Vertical />
          <Vertical />
        </div>
      </div>
    </>
  )
}

export default App