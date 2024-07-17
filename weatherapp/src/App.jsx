import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './components/Index'

function App() {

  return (
    <div className=' h-screen flex justify-center items-center background-img'>
      <WeatherApp/>
    </div>
  )
}

export default App
