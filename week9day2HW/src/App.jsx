import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// IMPORT OUR COMPONENTS
import Form from './components/Form'
import LuthAlgorithm from './components/LuthAlgorithm'


function App() {
 
  

 

  // console.log(luhnCheck(38520000023237));


  
  return (
    <div className='App'>
      <LuthAlgorithm/>
      
    </div>
  )
}

export default App